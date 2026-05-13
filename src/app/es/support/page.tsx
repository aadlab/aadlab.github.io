import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soporte · AAD lab',
  description:
    'Obtén ayuda con AAD lab, reporta un fallo o haz una pregunta. Email de contacto, preguntas frecuentes y solución de problemas.',
};

const SUPPORT_EMAIL = 'vistas.promo-7e@icloud.com';

export default function SupportPage() {
  return (
    <main>
      <section className="support-hero">
        <div className="container">
          <p className="section-label">Soporte</p>
          <h1>Estamos aquí para ayudarte.</h1>
          <p>
            Si algo no funciona como esperas, si tienes una sugerencia de
            mejora o si solo quieres saludar, escríbenos. Cada mensaje se
            lee.
          </p>
        </div>
      </section>

      <section style={{ padding: '16px 0 64px' }}>
        <div className="container">
          <div className="contact-block">
            <p className="section-label" style={{ marginBottom: 10 }}>
              Email
            </p>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <p style={{ marginTop: 16, fontSize: 14, color: 'var(--text-dim)' }}>
              Indica tu dispositivo (iPhone o Android) y la versión de la
              app, y describe los pasos que llevaron al problema. Una
              captura o un breve vídeo de pantalla ayudan muchísimo.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 80px' }}>
        <div className="container">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Preguntas frecuentes.</h2>

          <div className="faq">
            <details className="faq-item">
              <summary>¿Qué es un AAD?</summary>
              <p>
                Un Automatic Activation Device es una unidad de seguridad
                instalada en un equipo de paracaidismo que despliega
                automáticamente el paracaídas de reserva si el portador
                sigue en caída libre por debajo de una altitud
                preestablecida. CYPRES y VIGIL son los AAD más utilizados
                del mercado.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿Es este el CYPRES real?</summary>
              <p>
                No. AAD lab es un simulador. Reproduce el aspecto, los
                controles y el comportamiento de la unidad real
                CYPRES&nbsp;2 Changeable Mode para que practiques de forma
                segura. No está fabricado, respaldado ni afiliado a Airtec
                GmbH. No sustituye a la formación oficial de CYPRES ni al
                uso del equipo real.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿Funciona sin conexión?</summary>
              <p>
                Sí. Toda la app funciona sin conexión a internet. No se
                sube nada, no se descarga nada después de la instalación.
                Vuela con ella, entrena con ella, úsala donde quieras.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿La app recopila algún dato?</summary>
              <p>
                No. Sin cuentas, sin analítica, sin trackers, sin SDKs de
                terceros. Tus preferencias (idioma, háptica, tema) se
                guardan solo en tu dispositivo. El acceso opcional a
                ubicación y movimiento alimenta únicamente el fondo de
                Compass. Ambos se procesan en el dispositivo y nunca salen
                de tu móvil.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿Cómo cambio el idioma?</summary>
              <p>
                Ajustes → Idioma. Las opciones incluyen inglés, alemán,
                francés, español, italiano y ruso, además de una opción
                &quot;Sistema&quot; que sigue el idioma de tu dispositivo.
                La terminología de cada idioma sigue el manual oficial del
                CYPRES&nbsp;2 de esa región.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿Cómo restablezco el simulador a los valores por defecto?</summary>
              <p>
                Ajustes → Restablecer simulador. Esto borra tu perfil y
                devuelve la unidad al estado de fábrica. Útil si quieres
                practicar todo el flujo de configuración inicial desde
                cero.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿Por qué el feedback háptico se siente diferente en Android?</summary>
              <p>
                En iPhone, el Taptic Engine puede producir impactos
                distintos: Light, Medium y Heavy, así que los cuatro
                niveles están disponibles. En Android, la mayoría de los
                motores de vibración no diferencian las intensidades de
                forma fiable, por lo que se muestra un simple interruptor
                On/Off. &quot;On&quot; corresponde internamente al ajuste
                medio.
              </p>
            </details>

            <details className="faq-item">
              <summary>He encontrado un fallo. ¿Cómo lo reporto?</summary>
              <p>
                Escribe a{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> con
                el modelo de tu dispositivo, la versión del sistema
                operativo, la versión de la app y los pasos que llevaron al
                problema. Una captura o un vídeo de pantalla ayudan mucho.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿Habrá más escenarios?</summary>
              <p>
                Sí. Se añaden nuevos escenarios en actualizaciones
                continuas. Si tienes una ubicación, un peligro o una
                situación de DZ que te gustaría ver convertida en
                escenario de entrenamiento, envíala. Los escenarios ya
                cubren Suiza, Singapur, Mónaco, las Seychelles, el
                Himalaya, Eloy, unidades de segunda mano y muchos más.
              </p>
            </details>

            <details className="faq-item">
              <summary>¿Puedo confiar en AAD lab como mi único recurso de formación?</summary>
              <p>
                No. AAD lab es una ayuda al entrenamiento. Contrasta
                siempre los procedimientos con la guía oficial del
                CYPRES&nbsp;2 y consulta a un instructor certificado antes
                de operar el dispositivo físico.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
