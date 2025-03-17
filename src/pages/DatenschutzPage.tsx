
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const DatenschutzPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-light mb-12 pb-6 border-b border-muted">Datenschutz</h1>
            
            <div className="space-y-8 text-foreground/80">
              <div>
                <p className="mb-4">Wir, die VinLignum Holzmanufaktur GmbH & Co. KG, nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze. In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Verantwortlicher</h2>
                <p>Verantwortliche für die Datenverarbeitung auf dieser Webseite ist:</p>
                <p className="mt-2">VinLignum Holzmanufaktur GmbH & Co. KG</p>
                <p>Hermann-Löns-Str. 17</p>
                <p>55257 Budenheim</p>
                <p className="mt-4">Tel.: <a href="tel:+4963623094990" className="text-wine hover:text-wine-dark transition-colors">+49 6362 309 49 90</a></p>
                <p>E-Mail: <a href="mailto:info@vinligna.com" className="text-wine hover:text-wine-dark transition-colors">info@vinligna.com</a></p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Erfassung allgemeiner Informationen</h2>
                <p className="text-sm leading-relaxed">
                  Wenn Sie auf unsere Webseite zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Anonyme Informationen dieser Art werden von uns statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Cookies</h2>
                <p className="text-sm leading-relaxed">
                  Wie viele andere Webseiten verwenden wir auch so genannte „Cookies". Cookies sind kleine Textdateien, die von einem Webseitenserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem über Ihren Computer und Ihre Verbindung zum Internet.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Natürlich können Sie unsere Webseite grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um herauszufinden, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Webseite möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Kontaktformular</h2>
                <p className="text-sm leading-relaxed">
                  Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt, erteilen Sie uns für den Zeitpunkt der Kontaktaufnahme Ihre freiwillige Einwilligung zur Kontaktaufnahme. Hierfür ist die Angabe einer validen E-Mail-Adresse erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional. Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Nach Erledigung der von Ihnen gestellten Anfrage werden personenbezogene Daten automatisch gelöscht.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Google Analytics</h2>
                <p className="text-sm leading-relaxed">
                  Diese Webseite benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google"). Google Analytics verwendet sog. „Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Im Auftrag des Betreibers dieser Webseite wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Webseite vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: Browser Add On zur Deaktivierung von Google Analytics.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Änderung unserer Datenschutzbestimmungen</h2>
                <p className="text-sm leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und Widerspruch</h2>
                <p className="text-sm leading-relaxed">
                  Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten. Die Kontaktdaten finden Sie weiter oben.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Damit eine Sperre von Daten jederzeit berücksichtigt werden kann, müssen diese Daten zu Kontrollzwecken in einer Sperrdatei vorgehalten werden. Sie können auch die Löschung der Daten verlangen, soweit keine gesetzliche Archivierungsverpflichtung besteht. Soweit eine solche Verpflichtung besteht, sperren wir Ihre Daten auf Wunsch.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Sie können Änderungen oder den Widerruf einer Einwilligung durch entsprechende Mitteilung an uns mit Wirkung für die Zukunft vornehmen.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
                <p className="text-sm leading-relaxed">
                  Im Falle von datenschutzrechtlichen Verstößen steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link entnommen werden: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-wine hover:text-wine-dark transition-colors" target="_blank" rel="noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Stand der Datenschutzerklärung: Juni 2024</p>
              </div>
              
              <div className="pt-8 border-t border-muted">
                <h2 className="text-2xl font-light mb-6">Cookies</h2>
                <p className="text-sm mb-4 italic">Diese Cookie-Richtlinie wurde zuletzt am 17. Februar 2025 aktualisiert und gilt für Bürger und Einwohner mit ständigem Wohnsitz im Europäischen Wirtschaftsraum und der Schweiz.</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">1. Einführung</h3>
                    <p className="text-sm leading-relaxed">
                      Unsere Website, https://vinligna.com (im folgenden: „Die Website") verwendet Cookies und ähnliche Technologien (der Einfachheit halber werden all diese unter „Cookies" zusammengefasst). Cookies werden außerdem von uns beauftragten Drittparteien platziert. In dem unten stehendem Dokument informieren wir dich über die Verwendung von Cookies auf unserer Website.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">2. Was sind Cookies?</h3>
                    <p className="text-sm leading-relaxed">
                      Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den Seiten einer Internetadresse versendet und vom Webbrowser auf dem PC oder einem anderen Gerät gespeichert werden kann. Die darin gespeicherten Informationen können während folgender Besuche zu unseren oder den Servern relevanter Drittanbieter gesendet werden.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">3. Was sind Skripte?</h3>
                    <p className="text-sm leading-relaxed">
                      Ein Script ist ein Stück Programmcode, das benutzt wird, um unserer Website Funktionalität und Interaktivität zu ermöglichen. Dieser Code wird auf unseren Servern oder auf deinem Gerät ausgeführt.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">4. Was ist ein Web Beacon?</h3>
                    <p className="text-sm leading-relaxed">
                      Ein Web-Beacon (auch Pixel-Tag genannt), ist ein kleines unsichtbares Textfragment oder Bild auf einer Website, das benutzt wird, um den Verkehr auf der Website zu überwachen. Um dies zu ermöglichen werden diverse Daten von dir mittels Web-Beacons gespeichert.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">5. Cookies</h3>
                    <div className="space-y-4 pl-4">
                      <div>
                        <h4 className="text-base font-medium mb-2">5.1 Technische oder funktionelle Cookies</h4>
                        <p className="text-sm leading-relaxed">
                          Einige Cookies stellen sicher, dass Teile unserer Website richtig funktionieren und deine Nutzervorlieben bekannt bleiben. Durch das Platzieren funktionaler Cookies machen wir es dir einfacher unsere Website zu besuchen. Auf diese Weise musst du bei Besuchen unserer Website nicht wiederholt die gleichen Informationen eingeben, oder deine Gegenstände bleiben beispielsweise in deinem Warenkorb bis du bezahlst. Wir können diese Cookies ohne dein Einverständnis platzieren.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-base font-medium mb-2">5.2 Marketing- / Tracking-Cookies</h4>
                        <p className="text-sm leading-relaxed">
                          Marketing- / Tracking-Cookies sind Cookies oder eine andere Form der lokalen Speicherung, die zur Erstellung von Benutzerprofilen verwendet werden, um Werbung anzuzeigen oder den Benutzer auf dieser Website oder über mehrere Websites hinweg für ähnliche Marketingzwecke zu verfolgen.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">6. Platzierte Cookies</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>WordPress</strong></p>
                      <p>Funktional</p>
                      <p>Consent to service wordpress</p>
                      
                      <p className="mt-4"><strong>Google Analytics</strong></p>
                      <p>Statistik</p>
                      <p>Consent to service google-analytics</p>
                      
                      <p className="mt-4"><strong>Sonstiges</strong></p>
                      <p>Gegenstand der Untersuchung</p>
                      <p>Consent to service sonstiges</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">7. Zustimmung</h3>
                    <p className="text-sm leading-relaxed">
                      Wenn du unsere Website das erste Mal besuchst, zeigen wir dir ein Pop-Up mit einer Erklärung über Cookies. Sobald du auf „Speichern" klickst, gibst du uns dein Einverständnis, alle von dir gewählten Kategorien von Cookies und Plugins wie in dieser Cookie-Erklärung beschrieben zu verwenden. Du kannst die Verwendung von Cookies über deinen Browser deaktivieren, aber bitte beachte, dass unsere Website dann unter Umständen nicht richtig funktioniert.
                    </p>
                    
                    <div className="pl-4 mt-4">
                      <h4 className="text-base font-medium mb-2">7.1 Verwalte deine Zustimmungseinstellungen</h4>
                      <div className="space-y-2 text-sm">
                        <p>Funktional - Immer aktiv</p>
                        <p>Marketing</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">8. Aktivierung/Deaktivierung und Löschen von Cookies</h3>
                    <p className="text-sm leading-relaxed">
                      Du kannst deinen Internetbrowser verwenden um automatisch oder manuell Cookies zu löschen. Du kannst außerdem spezifizieren ob spezielle Cookies nicht platziert werden sollen. Eine andere Möglichkeit ist es deinen Internetbrowser derart einzurichten, dass du jedes Mal benachrichtigt wirst, wenn ein Cookie platziert wird. Für weitere Information über diese Möglichkeiten beachte die Anweisungen in der Hilfesektion deines Browsers.
                    </p>
                    <p className="text-sm leading-relaxed mt-3">
                      Bitte nimm zur Kenntnis, dass unsere Website möglicherweise nicht richtig funktioniert, wenn alle Cookies deaktiviert sind. Wenn du die Cookies in deinem Browser löscht, werden diese neu platziert, wenn du unsere Website erneut besuchst.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">9. Deine Rechte in Bezug auf persönliche Daten</h3>
                    <p className="text-sm leading-relaxed">Du hast in Bezug auf deine persönlichen Daten die folgenden Rechte:</p>
                    <ul className="list-disc pl-8 text-sm mt-2 space-y-1">
                      <li>Du hast das Recht zu wissen, warum deine persönlichen Daten gebraucht werden, was mit ihnen passiert und wie lange diese verwahrt werden.</li>
                      <li>Zugriffsrecht: Du hast das Recht deine uns bekannten persönliche Daten einzusehen.</li>
                      <li>Recht auf Berichtigung: Du hast das Recht wann immer du wünscht, deine persönlichen Daten zu ergänzen, zu korrigieren sowie gelöscht oder blockiert zu bekommen.</li>
                      <li>Wenn du uns dein Einverständnis zur Verarbeitung deiner Daten gegeben hast, hast du das Recht dieses Einverständnis zu widerrufen und deine persönlichen Daten löschen zu lassen.</li>
                      <li>Recht auf Datentransfer deiner Daten: Du hast das Recht, alle deine persönlichen Daten von einem Kontrolleur anzufordern und in ihrer Gesamtheit zu einem anderen Kontrolleur zu transferieren.</li>
                      <li>Widerspruchsrecht: Du kannst der Verarbeitung deiner Daten widersprechen. Wir entsprechen dem, es sei denn es gibt berechtigte Gründe für die Verarbeitung.</li>
                    </ul>
                    <p className="text-sm leading-relaxed mt-3">
                      Um diese Rechte auszuüben kontaktiere uns bitte. Bitte beziehe dich auf die Kontaktdaten am Ende dieser Cookie-Erklärung. Wenn du eine Beschwerde darüber hast, wie wir deine Daten behandeln, würden wir diese gerne hören, aber du hast auch das Recht diese an die Aufsichtsbehörde (Datenschutzbehörde) zu richten.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">10. Kontaktdaten</h3>
                    <p className="text-sm leading-relaxed">
                      Für Fragen und/oder Kommentare über unsere Cookie-Richtlinien und diese Aussage kontaktiere uns bitte mittels der folgenden Kontaktdaten:
                    </p>
                    <div className="text-sm mt-3">
                      <p>VinLignum Holzmanufaktur GmbH & Co. KG</p>
                      <p>Hermann-Löns-Str. 17</p>
                      <p>55257 Budenheim</p>
                      <p>Deutschland</p>
                      <p className="mt-2">Website: <a href="https://vinligna.com" className="text-wine hover:text-wine-dark transition-colors">https://vinligna.com</a></p>
                      <p>E-Mail: <a href="mailto:info@vinligna.com" className="text-wine hover:text-wine-dark transition-colors">info@vinligna.com</a></p>
                      <p>Telefon: <a href="tel:+4963623094990" className="text-wine hover:text-wine-dark transition-colors">+49 6362 309 49 90</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default DatenschutzPage;
