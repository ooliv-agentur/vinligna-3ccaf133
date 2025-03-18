
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import BrandAffiliation from '@/components/BrandAffiliation';

const AGBPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-12 pb-6 border-b border-muted">Allgemeine Geschäftsbedingungen</h1>
            
            <div className="space-y-8 text-foreground/80">
              <div>
                <h2 className="text-xl font-medium mb-4">des Tischler- und Schreinerhandwerks (Stand 4/2022)</h2>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">1. Grundsätzliches</h2>
                <p className="text-sm leading-relaxed">
                  Es gilt deutsches Recht. Die AGB gelten unabhängig davon, ob wir als Auftragnehmer oder Auftraggeber Vertragspartei werden. Unseren AGB entgegenstehende, abweichende Bedingungen des Kunden oder Lieferanten wird widersprochen. Die AGB gelten nicht bei Vergaben nach VOB/A oder VOL/A.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">2. Weitere Vertragsgrundlagen</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.1. Auftragsannahme</h3>
                    <p className="text-sm leading-relaxed">
                      Bis zur Auftragsannahme sind alle Angebote freibleibend. Weicht der Auftrag des Auftraggebers von unserem Angebot ab, so kommt ein Vertrag in diesem Falle erst mit der Bestätigung des Auftragnehmers zustande.
                    </p>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.2. Lieferverzögerung</h3>
                    <p className="text-sm leading-relaxed">
                      Wird die von uns geschuldete Leistung durch höhere Gewalt, rechtmäßigen Streik, unverschuldetes Unvermögen auf Seiten des Auftragnehmers oder eines seiner Lieferanten sowie ungünstige Witterungsverhältnisse verzögert, so verlängert sich die vereinbarte Lieferfrist um die Dauer der Verzögerung. Dauert die Verzögerung unangemessen lange, so kann jeder Vertragsteil ohne Ersatzleistung vom Vertrag zurücktreten. Kann die Lieferung aufgrund von Umständen, die der Auftraggeber zu vertreten hat, nicht zum vereinbarten Termin erfolgen, so geht die Gefahr in dem Zeitpunkt auf den Auftraggeber über, in dem ihm die Anzeige über die Lieferbereitschaft zugegangen ist. Lagerkosten gehen zu Lasten des Auftraggebers. Wir behalten uns die Geltendmachung weiterer Verzögerungskosten vor.
                    </p>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.3. Mangelrüge</h3>
                    <p className="text-sm leading-relaxed">
                      Offensichtliche Mängel unserer Leistung müssen von Unternehmern zwei Wochen nach Lieferung der Ware oder bei Abnahme der Leistung schriftlich gerügt werden. Nach Ablauf dieser Frist können Mängelansprüche wegen offensichtlicher Mängel nicht mehr geltend gemacht werden. Die weitergehenden Vorschriften bei Handelskauf bleiben unberührt.
                    </p>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.4. Mangelverjährung</h3>
                    <p className="text-sm leading-relaxed">
                      Bei Verträgen mit Unternehmern, die keine Bauleistung betreffen, beträgt die Gewährleistung ein Jahr. Bei Reparaturarbeiten, die keine Bauleistung darstellen, gilt eine Verjährung der Gewährleistung von einem Jahr ohne Rücksicht auf die Person des Vertragspartners. Die Regelungen dieses Absatzes gelten nicht, soweit Vorsatz oder grobe Fahrlässigkeit vorliegt oder Ansprüche wegen der Verletzung des Lebens, des Körpers oder der Gesundheit geltend gemacht werden oder soweit der Verkäufer den Mangel arglistig verschwiegen hat oder eine Garantie für die Beschaffenheit des Liefergegenstandes übernommen hat.
                    </p>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.5. Umsetzung der Gewährleistung</h3>
                    <p className="text-sm leading-relaxed">
                      Bei berechtigten Mängelrügen haben wir die Wahl, entweder die mangelhaften Liefergegenstände nachzubessern oder dem Auftraggeber gegen Rücknahme des beanstandeten Gegenstandes Ersatz zu liefern. Solange wir unseren Verpflichtungen auf Behebung der Mängel nachkommen, hat der Auftraggeber nicht das Recht, Herabsetzung der Vergütung oder Rückgängigmachung des Vertrages zu verlangen, sofern nicht ein Fehlschlagen der Nachbesserung vorliegt. Ist eine Nachbesserung oder Ersatzlieferung unmöglich, schlägt sie fehl oder wird sie verweigert, kann der Auftraggeber nach seiner Wahl einen entsprechenden Preisnachlass oder Rückgängigmachung des Vertrages verlangen. Satz 1 gilt nicht bei Verbrauchergeschäften über den Bezug beweglicher Sachen.
                    </p>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.6. Aus- und Einbaukosten</h3>
                    <p className="text-sm leading-relaxed">
                      Die gesetzliche Regelung im Kaufvertragsrecht gilt uneingeschränkt für die Geltendmachung von Aus- und Einbaukosten.
                    </p>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.7. Anlieferung</h3>
                    <p className="text-sm leading-relaxed">
                      Beim Anliefern setzen wir voraus, dass das Fahrzeug unmittelbar an das Gebäude fahren und entladen werden kann. Mehrkosten, die durch weitere Transportwege oder wegen erschwerter Anfuhr vom Fahrzeug zum Gebäude verursacht werden, werden gesondert berechnet. Für Transporte über das 2. Stockwerk hinaus sind mechanische Transportmittel vom Auftraggeber bereitzustellen. Treppen müssen passierbar und gegen Beschädigung geschützt sein. Wird die Ausführung unserer Arbeiten oder der von uns beauftragten Personen durch Umstände behindert, die der Auftraggeber zu vertreten hat, so werden die entsprechenden Kosten (z.B. Arbeitszeit und Fahrtkosten) in Rechnung gestellt.
                    </p>
                  </div>
                
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.8. Abschlagszahlung</h3>
                    <p className="text-sm leading-relaxed">
                      Ist kein individueller Zahlungsplan vereinbart, können wir für Teilleistungen in Höhe des Wertes der erbrachten Leistung eine Abschlagzahlung verlangen.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">3. Förmliche Abnahme</h2>
                <p className="text-sm leading-relaxed">
                  Sofern vertraglich eine förmliche Abnahme vorgesehen ist, tritt die Abnahmewirkung auch dann ein, wenn der Auftraggeber einmal vergeblich und in zumutbarer Weise zur Durchführung der Abnahme aufgefordert wurde. Die Abnahmewirkung tritt zwölf Werktage nach Zugang der Aufforderung ein.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">4. Kündigungsentschädigung</h2>
                <p className="text-sm leading-relaxed">
                  Kündigt der Auftraggeber den Werkvertrag ohne Grund, können wir 10% der auf den noch nicht erbrachten Teil der Werkleistung entfallenden vereinbarten Vergütung (Kündigungsentschädigung) verlangen. Es bleibt uns unbenommen, bei entsprechendem Nachweis eine höhere Kündigungsentschädigung zu verlangen. Ebenso bleibt dem Auftraggeber der Nachweis unbenommen, dass uns keine oder eine geringere Kündigungsentschädigung zusteht.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">5. Wartungs-, Kontroll- und Pflegehinweise</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.1</h3>
                    <p className="text-sm leading-relaxed">
                      Wir weisen darauf hin, dass für eine dauerhafte Funktion Wartungsarbeiten durchzuführen sind, insbesondere:
                    </p>
                    <ul className="list-disc ml-5 mt-2 text-sm leading-relaxed">
                      <li>Beschläge und gängige Bauteile sind zu kontrollieren und evtl. zu ölen oder zu fetten</li>
                      <li>Abdichtungsfugen sind regelmäßig zu kontrollieren</li>
                      <li>Anstriche innen wie außen (z.B. Fenster, Fußböden, Treppenstufen) sind jeweils nach Lack- oder Lasurart und Witterungseinfluss und Nutzung nachzubehandeln</li>
                    </ul>
                    <p className="text-sm leading-relaxed mt-2">
                      Diese Arbeiten gehören nicht zum Auftragsumfang, wenn nicht ausdrücklich anders vereinbart. Unterlassene Wartungsarbeiten können die Lebensdauer und Funktionstüchtigkeit der Bauteile beeinträchtigen, ohne dass hierdurch Mängelansprüche entstehen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.2</h3>
                    <p className="text-sm leading-relaxed">
                      Durch den fachgerechten Einbau moderner Fenster und Außentüren wird die energetische Qualität des Gebäudes verbessert und die Gebäudehülle dichter. Um die Raumluftqualität zu erhalten und der Schimmelpilzbildung vorzubeugen, sind zusätzliche Anforderungen an die Be- und Entlüftung des Gebäudes nach DIN 1946-6 zu erfüllen. Ein insoweit eventuell notwendiges Lüftungskonzept, ist eine planerische Aufgabe, die nicht Gegenstand des Auftrages an den Handwerker ist und in jedem Fall vom Auftraggeber/Bauherrn zu veranlassen ist.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.3</h3>
                    <p className="text-sm leading-relaxed">
                      Unwesentliche, zumutbare Abweichungen in den Abmessungen und Ausführungen (Farbe und Struktur), insbesondere bei Nachbestellungen, bleiben vorbehalten, soweit diese in der Natur der verwendeten Materialien (Massivhölzer, Furniere, Leder, Stoffe und Ähnliches) liegen und üblich sind.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.4</h3>
                    <p className="text-sm leading-relaxed">
                      Der Auftraggeber hat zum Schutz und Erhalt der gelieferten Bauteile (z.B. Fenster, Treppen, Parkett) für geeignete klimatische Raumbedingungen (Luftfeuchtigkeit, Temperatur) Sorge zu tragen.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">6. Ausschluss der Aufrechnung</h2>
                <p className="text-sm leading-relaxed">
                  Die Aufrechnung mit anderen als unbestrittenen oder rechtskräftig festgestellten Forderungen ist ausgeschlossen.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">7. Eigentumsvorbehalt</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.1</h3>
                    <p className="text-sm leading-relaxed">
                      Gelieferte Gegenstände bleiben bis zur vollen Bezahlung der Vergütung unser Eigentum.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.2</h3>
                    <p className="text-sm leading-relaxed">
                      Der Auftraggeber ist verpflichtet, uns Pfändungen der Eigentumsvorbehaltsgegenstände unverzüglich in Textform anzuzeigen und die Pfandgläubiger von dem Eigentumsvorbehalt zu unterrichten. Der Auftraggeber ist nicht berechtigt, die ihm unter Eigentumsvorbehalt gelieferten Gegenstände zu veräußern, zu verschenken, zu verpfänden oder zur Sicherheit zu übereignen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.3</h3>
                    <p className="text-sm leading-relaxed">
                      Erfolgt die Lieferung für einen vom Auftraggeber unterhaltenen Geschäftsbetrieb, so dürfen die Gegenstände im Rahmen einer ordnungsgemäßen Geschäftsführung weiter veräußert werden. In diesem Falle werden die Forderungen des Auftraggebers gegen den Abnehmer aus der Veräußerung bereits jetzt in Höhe des Rechnungswertes des gelieferten Vorbehaltsgegenstandes an uns abgetreten. Bei Weiterveräußerung der Gegenstände auf Kredit hat sich der Auftraggeber gegenüber seinem Abnehmer das Eigentum vorzubehalten. Die Rechte und Ansprüche aus diesem Eigentumsvorbehalt gegenüber seinem Abnehmer tritt der Auftraggeber hiermit an uns ab.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.4</h3>
                    <p className="text-sm leading-relaxed">
                      Werden Eigentumsvorbehaltsgegenstände als wesentliche Bestandteile in das Grundstück des Auftraggebers eingebaut, so tritt der Auftraggeber schon jetzt die aus einer Veräußerung des Grundstückes oder von Grundstücksrechten entstehenden Forderungen in Höhe des Rechnungswertes der Eigentumsvorbehaltsgegenstände mit allen Nebenrechten an uns ab.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.5</h3>
                    <p className="text-sm leading-relaxed">
                      Werden die Eigentumsvorbehaltsgegenstände vom Auftraggeber bzw. im Auftrag des Auftraggebers als wesentliche Bestandteile in das Grundstück eines Dritten eingebaut, so tritt der Auftraggeber schon jetzt gegen den Dritten oder den, den es angeht, etwa entstehende Forderungen auf Vergütung in Höhe des Rechnungswertes der Eigentumsvorbehaltsgegenstände mit allen Nebenrechten an uns ab. Bei Verarbeitung, Verbindung und Vermischung der Vorbehaltsgegenstände mit anderen Gegenständen durch den Auftraggeber steht uns das Miteigentum an der neuen Sache zu im Verhältnis des Rechnungswertes der Vorbehaltsgegenstände zum Wert der übrigen Gegenstände.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">8. Eigentums– und Urheberrecht</h2>
                <p className="text-sm leading-relaxed">
                  An Kostenanschlägen, Entwürfen, Zeichnungen und Berechnungen behalten wir uns unser Eigentums- und Urheberrecht vor. Sie dürfen ohne unsere Zustimmung weder genutzt, vervielfältigt noch dritten Personen zugänglich gemacht werden. Sie sind im Falle der Nichterteilung des Auftrages unverzüglich zurückzugeben.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">9. Streitbeilegung</h2>
                <p className="text-sm leading-relaxed">
                  Wir sind weder bereit noch zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle verpflichtet.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">10. Gerichtsstand</h2>
                <p className="text-sm leading-relaxed">
                  Sind beide Vertragsparteien Kaufleute, so ist ausschließlicher Gerichtsstand der Geschäftssitz unseres Unternehmens.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">11. Datenschutz</h2>
                <p className="text-sm leading-relaxed">
                  Die personenbezogenen Daten unserer Kunden werden von uns zwecks Erfüllung unserer eigenen vorvertraglichen und vertraglichen Pflichten sowie zur Vertragsdurchführung in Form von Namen, Adresse und Kommunikationsdaten des Geschäfts- bzw. Wohnsitzes maschinenlesbar gespeichert. Diese Datenerhebung und Datenverarbeitung beruht auf Artikel 6 Abs. 1b) DSGVO. Wir sichern zu, diese Daten ausschließlich zu eigenen Zwecken zu speichern. Insbesondere werden sie in keiner Weise an unberechtigte Dritte zu gewerblichen Zwecken übermittelt. Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung nicht mehr erforderlich sind. Personen, deren Daten wir auf diese Weise erhoben und verarbeitet haben, sind berechtigt, bei uns Auskunft darüber zu verlangen, welche sie betreffenden Daten bei uns gespeichert sind. Bei Unrichtigkeit der erfassten Daten können diese Personen von uns die Berichtigung, bei unzulässiger Datenspeicherung die Löschung der Daten verlangen. Auch steht ihnen ein Beschwerderecht bei der für den Datenschutz zuständigen Aufsichtsbehörde zu.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <BrandAffiliation />
      <Footer />
    </>
  );
};

export default AGBPage;
