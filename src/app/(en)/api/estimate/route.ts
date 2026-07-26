import { NextRequest, NextResponse } from "next/server";
import { sendLead } from "@/lib/leads";

const SYSTEM_PROMPT = `You are a confidential preliminary case review assistant for Times Up, a woman-led Texas law firm representing survivors of sexual assault and abuse in civil cases.

Given details a survivor has chosen to share, provide a PRELIMINARY review that includes:

1. **Whether a Civil Claim May Exist**: Explain, gently and honestly, why the situation described may support a civil claim against the perpetrator and/or a negligent institution (hotel, employer, school, rideshare company, property owner).
2. **Who May Be Held Accountable**: Identify the categories of potentially liable parties based on the details given.
3. **Key Factors**: List 3-4 factors that most influence a case like this (institutional knowledge, deadlines, available records, impact on the survivor).
4. **Next Steps**: Recommend 2-3 gentle, practical actions (preserving messages/records, considering support resources, a confidential consultation).
5. **Time Sensitivity**: Note relevant Texas deadlines in general terms (up to 5 years for many adult survivor claims against a perpetrator, up to 30 years after turning 18 for many childhood abuse claims, often shorter for claims against institutions) without giving definitive legal advice.

IMPORTANT RULES:
- Be trauma-informed: warm, validating, never graphic, never judgmental. Briefly acknowledge the courage it takes to reach out.
- NEVER provide dollar figures or value ranges. Explain that value depends on factors an attorney must evaluate.
- Never guarantee outcomes and never pressure the survivor.
- Remind them a police report is NOT required for a civil case and that they can proceed confidentially (e.g., Jane Doe filings).
- Always recommend a free, confidential consultation with an attorney for a real evaluation.
- If the details describe immediate danger, gently mention 911 and the National Sexual Assault Hotline (800-656-4673).
- Keep the response clear and organized with short paragraphs.
- Respond in the SAME LANGUAGE the case details are provided in.
- End by encouraging them to contact Times Up for a free, confidential consultation.
- Use markdown formatting (bold headings, bullet lists) for readability.`;

async function callLLM(caseDetails: string, locale: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return generateFallbackEstimate(locale);
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: caseDetails },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`LLM API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || generateFallbackEstimate(locale);
  } catch {
    return generateFallbackEstimate(locale);
  }
}

function generateFallbackEstimate(locale: string): string {
  const isSpanish = locale === "es";

  if (isSpanish) {
    return `**Revisión Preliminar Confidencial**

Gracias por confiar en nosotras. Compartir lo que pasó requiere valentía, y queremos que sepas que lo que describes puede dar lugar a un caso civil en Texas — contra la persona responsable y, en muchos casos, contra instituciones (hoteles, empleadores, escuelas, plataformas) cuya negligencia lo hizo posible.

**Factores Clave:**
- Quién puede ser responsable, incluidas instituciones negligentes
- Los plazos legales en Texas (a menudo más largos de lo que la gente cree)
- Registros y evidencia que se pueden preservar
- El impacto que esto ha tenido en tu vida

**Próximos Pasos Sugeridos:**
- Guarda mensajes, fotos o registros relacionados, si los tienes
- No es necesario haber hecho una denuncia policial para un caso civil
- Habla confidencialmente con una abogada — es gratis y sin compromiso

**Importante:** Esta es solo una revisión preliminar. Cada caso es único. Para una evaluación real, gratuita y confidencial, contacta a Times Up hoy. Si estás en peligro inmediato, llama al 911. Apoyo confidencial 24/7: 800-656-4673.`;
  }

  return `**Confidential Preliminary Review**

Thank you for trusting us with this. Reaching out takes real courage — and what you describe may support a civil claim in Texas, against the person responsible and, in many situations, against institutions (hotels, employers, schools, platforms) whose negligence made it possible.

**Key Factors:**
- Who can be held accountable, including negligent institutions
- Texas filing deadlines (often longer than people expect)
- Records and evidence that can be preserved
- The impact this has had on your life

**Suggested Next Steps:**
- Save any related messages, photos, or records you may have
- Remember: a police report is not required for a civil case
- Talk confidentially with an attorney — free and no obligation

**Important:** This is only a preliminary review. Every case is unique. For a real, free, confidential evaluation, contact Times Up today. If you are in immediate danger, call 911. Confidential 24/7 support: 800-656-4673.`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      accidentDate,
      location,
      caseType,
      role,
      injuries,
      treatment,
      workImpact,
      policeReport,
      additional,
      locale,
    } = body as Record<string, string>;

    if (!accidentDate || !caseType || !injuries) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Email the lead + case details to the firm
    await sendLead(
      "New Confidential Case Review Lead",
      [
        { label: "Name", value: name },
        { label: "Phone", value: phone },
        { label: "Email", value: email },
        { label: "Timing", value: accidentDate },
        { label: "Location", value: location },
        { label: "Case Type", value: caseType },
        { label: "Who Was Harmed", value: role },
        { label: "Impact Described", value: injuries },
        { label: "Care / Support Received", value: treatment },
        { label: "Work / School Impact", value: workImpact },
        { label: "Police Report", value: policeReport },
        { label: "Additional Details", value: additional },
        { label: "Language", value: locale === "es" ? "Spanish" : "English" },
      ],
      email || undefined
    );

    const lang = locale === "es" ? "Spanish" : "English";
    const caseDetails = `Please respond in ${lang}.

CASE DETAILS:
- Timing: ${accidentDate}
- Location/Setting: ${location || "Texas (unspecified)"}
- Case Type: ${caseType}
- Who Was Harmed: ${role}
- Impact Described: ${injuries}
- Care/Support Received: ${treatment}
- Work/School Impact: ${workImpact}
- Police Report Made: ${policeReport}
- Additional Details: ${additional || "None provided"}`;

    const estimate = await callLLM(caseDetails, locale === "es" ? "es" : "en");

    return NextResponse.json({ estimate });
  } catch (error) {
    console.error("Estimate API error:", error);
    return NextResponse.json(
      { error: "Failed to generate estimate" },
      { status: 500 }
    );
  }
}
