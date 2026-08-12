    const fechaInicio = new Date("2026-03-13T00:00:00");

    function actualizarTiempoJuntos() {
        const ahora = new Date();
        const diferenciaMs = ahora - fechaInicio;

        // Cálculos totales
        const minutosTotales = Math.floor(diferenciaMs / (1000 * 60));
        const horasTotales = Math.floor(minutosTotales / 60);
        const diasTotales = Math.floor(horasTotales / 24);

        // Cálculo detallado de meses y días reales
        let meses = (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 + (ahora.getMonth() - fechaInicio.getMonth());
        let diasRestantes = ahora.getDate() - fechaInicio.getDate();

        if (diasRestantes < 0) {
            meses--;
            const ultimoMes = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
            diasRestantes += ultimoMes.getDate();
        }

        // Creamos la versión con un mes extra (después de haber calculado los meses reales)
        let mesesNosotros = meses + 1;

        // Horas y minutos sobrantes
        const horasRestantes = horasTotales % 24;
        const minutosRestantes = minutosTotales % 60;

        // Mostrar en pantalla
        document.getElementById("txt-dias").textContent = diasTotales;
        document.getElementById("txt-meses").textContent = meses;
        document.getElementById("txt-horas").textContent = horasRestantes;
        document.getElementById("txt-minutos").textContent = minutosRestantes;
        document.getElementById("txt-mesesNosotros").textContent = mesesNosotros; 
    }

    // Actualizar al cargar y cada minuto
    actualizarTiempoJuntos();
    setInterval(actualizarTiempoJuntos, 60000);
