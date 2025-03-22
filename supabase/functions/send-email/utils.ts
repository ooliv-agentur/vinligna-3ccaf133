
// Helper functions for email handling

interface EmailData {
  name: string;
  email: string;
  telefon?: string;
  interesse: string;
  nachricht: string;
  formSource?: string;
}

// Format interest selection for display
export function formatInterest(interesse: string): string {
  switch (interesse) {
    case 'business': return 'Businesslösungen';
    case 'private': return 'Privatkollektion';
    case 'consultation': return 'Designberatung';
    case 'other': return 'Andere Anfrage';
    default: return interesse;
  }
}

// Helper function to create mailto link
export function createMailtoLink(data: EmailData): string {
  // Format the interest value for the email
  let formattedInterest = formatInterest(data.interesse);

  const subject = encodeURIComponent(`Neue Nachricht von ${data.name}${data.formSource ? ` über ${data.formSource}` : ''}`);
  const body = encodeURIComponent(`
Neue Nachricht über das Kontaktformular:
Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.telefon || "Nicht angegeben"}
Interesse: ${formattedInterest}
Nachricht:
${data.nachricht}

Formular: ${data.formSource || "Nicht angegeben"}
Zeitstempel: ${new Date().toLocaleString("de-DE")}
`);
  
  return `mailto:info@vinligna.com?subject=${subject}&body=${body}`;
}
