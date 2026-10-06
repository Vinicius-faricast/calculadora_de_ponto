export const Calculator = () => {
    return (
        <>
            <h1>Calculadora de ponto</h1>
            <h1>Teste</h1>
            <form action="" id="form">
                <label htmlFor="horaEntrada">Horas entrada</label>
                <input type="time" name="horaEntrada" id="horaEntrada" required />
                <label htmlFor="horaAlmoco">Hora almoço</label>
                <input type="time" name="horaAlmoco" id="horaAlmoco" required />
                <label htmlFor="cargaHoraria">Carga horaria</label>
                <input type="time" name="cargaHoraria" id="cargaHoraria" required />
                <button>Enviar</button>
            </form>
        </>
    )
}