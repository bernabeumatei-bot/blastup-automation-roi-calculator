# Calculadora de ROI de automatización

Demo funcional y genérica de Blastup Partner para estimar el impacto económico de recuperar tiempo en tareas manuales. Sirve los archivos con un servidor local estático (por ejemplo, ejecuta python -m http.server 8000 en este directorio) y abre http://localhost:8000. No necesita cuenta ni servicios externos.

**Web oficial:** https://blast-up.com

## Cómo funciona

Introduce personas afectadas, horas manuales semanales por persona, coste laboral por hora, porcentaje de horas recuperables, coste inicial y coste mensual. La herramienta calcula horas anuales recuperadas, beneficio bruto, coste del primer año, resultado neto, ROI y plazo estimado de recuperación.

Fórmulas: horas recuperadas = personas × horas semanales × 52 × porcentaje recuperable; beneficio bruto = horas recuperadas × coste/hora; coste anual = implantación + 12 × operación mensual; ROI = (beneficio bruto − coste anual) / coste anual. El plazo se calcula con el margen mensual, cuando es positivo.

Los resultados dependen de supuestos introducidos por el usuario. No son una predicción financiera, una oferta comercial ni una garantía de ahorro. Los datos permanecen en el navegador. Ejecuta las pruebas con node --test.

Se adaptó la lógica básica de horas y coste de una calculadora previa de Blastup; esta demo añade costes de implantación y operación y no incluye datos de clientes.

## English

Functional, generic automation ROI calculator by Blastup Partner. Serve this directory with a local static server (for example, python -m http.server 8000) and open http://localhost:8000. Enter team size, weekly manual hours per person, loaded hourly cost, recoverable percentage, setup cost and monthly running cost. It estimates annual recovered hours, gross benefit, first-year cost, net result, ROI and payback period. Figures are scenario estimates, not guaranteed savings. All inputs stay in your browser.

**Official website:** https://blast-up.com
