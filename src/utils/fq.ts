export interface FAQItem {
    pregunta: string;
    respuesta: string;
}

export interface FAQData {
    durante_el_cursado: FAQItem[];
    examenes_finales: FAQItem[];
}

export const faq_data: FAQData = {
    "durante_el_cursado": [
        {
            "pregunta": "¿Cómo me inscribo por materias?",
            "respuesta": "A través de tu SAG, ingresando a Gestiones Académicas tendrás disponible la opción \"Inscripción por Materias\". " +
                         "Selecciona las mismas y corrobora la cátedra que desees escoger (en caso de corresponder). Por último, comprobar la transacción y finalizar la gestión. " +
                         "Te recomendamos que siempre descargues el comprobante."
        },
        {
            "pregunta": "¿Cuándo se habilitan las materias en la plataforma? ¿Qué hacer si no me figuran?",
            "respuesta": "Las materias se habilitan automáticamente en tu E-learning 24 hs. después de haber realizado la inscripción en el SAG. " +
                         "En caso contrario ingresá a través del SAG el reclamo correspondiente."
        },
        {
            "pregunta": "¿Dónde obtengo información general de la carrera?",
            "respuesta": "En la plataforma E-Learning está disponible el tablón de \"Anuncios o Jefatura de carrera\", donde la Facultad publicará novedades, " +
                         "cronogramas de exámenes parciales, finales e información en general, etc."
        },
        {
            "pregunta": "¿Dónde puedo ver una materia que cursé el año anterior?",
            "respuesta": "Para ingresar al ciclo lectivo del año anterior (materias que ya finalizaron el cursado) debes acceder en el portal de Plataformas Virtuales: " +
                         "www.ucasal.edu.ar/htm/sead/plataformasvirtuales/ y seleccionar, en el margen inferior de la página, la Facultad correspondiente a tu carrera."
        },
        {
            "pregunta": "¿Dónde ingresar un reclamo o consulta?",
            "respuesta": "Podés ingresar tu consulta o reclamo a las diferentes áreas de la Universidad desde tu SAG usando la transacción denominada \"Ingreso de consulta o reclamo\". " +
                         "Es importante que especifiques adecuadamente el motivo (Tipo y Subtipo) para que llegue al área adecuada. " +
                         "Recibirás la respuesta en tu SAG en el apartado \"Historial de consultas y reclamos\"."
        }
    ],
    "examenes_finales": [
        {
            "pregunta": "¿Cómo me inscribo a exámenes finales?",
            "respuesta": "A través de tu SAG ingresando a Gestiones Académicas tendrás disponible la opción \"Inscripción a exámenes finales\". " +
                         "Selecciona la materia que desees finalizar, comprueba la transacción y finaliza la gestión."
        },
        {
            "pregunta": "¿Cuáles son los plazos de inscripción?",
            "respuesta": "Como regular:\n- Desde el décimo día hábil previo a la fecha tope de inscripción (sin contar feriados ni fines de semana).\n" +
                         "- Hasta las 23:59:00 hs. del 3º día hábil previo a la fecha de examen (esta sería la fecha tope).\n" +
                         "Como libre:\n- Desde el décimo día hábil previo (sin contar feriados ni fines de semana).\n" +
                         "- Hasta las 23:59 hs. del 6º día hábil previo a la fecha de examen."
        },
        {
            "pregunta": "¿Cuándo veré reflejada mi nota en el SAG?",
            "respuesta": "Los docentes tienen un plazo de diez días hábiles para corregir un examen final y cargar la nota al SAG en tu \"Ficha Académica Parcial\". " +
                         "Si no tenés cargada la nota una vez vencido el periodo estipulado podés realizar tu consulta o reclamo a través del SAG."
        },
        {
            "pregunta": "¿Puedo rendir una misma materia en turnos consecutivos?",
            "respuesta": "Sí, siempre que el acta correspondiente al turno anterior haya sido cerrada antes de la fecha límite de inscripción."
        },
        {
            "pregunta": "¿Cuánto dura la regularidad de una materia?",
            "respuesta": "Una vez cargada la regularidad de la materia en tu ficha académica parcial, contarás con dos años y hasta cinco intentos para finalizar la misma."
        },
        {
            "pregunta": "¿Qué pasa si no me presento a rendir y no borré la inscripción?",
            "respuesta": "En ese caso, se registra ausente en el acta. El mismo no se computa como un intento."
        },
        {
            "pregunta": "¿Cómo rindo en condición libre?",
            "respuesta": "Para rendir en condición de libre, debes abonar el arancel correspondiente descargando el cupón de pago a tu disposición en SAG. " +
                         "Una vez acreditado, el sistema te mostrará las materias habilitadas para rendir libre y podrás inscribirte. " +
                         "Recordá que la inscripción vence 6 días hábiles antes de la fecha del examen."
        },
        {
            "pregunta": "¿Qué es un crédito por examen?",
            "respuesta": "Es un recurso que permite rendir una materia en condición de \"libre\" en un turno de examen, sin necesidad de cursar la misma."
        },
        {
            "pregunta": "¿Cuántas materias puedo rendir libre?",
            "respuesta": "Podés ver esta información en tu Ficha Académica Parcial en el SAG. Incluye:\n" +
                         "- Cantidad de materias permitidas (en toda la carrera).\n" +
                         "- Rendidass en el total de la carrera.\n" +
                         "Es importante revisar la normativa del Manual del Alumno."
        },
        {
            "pregunta": "¿Se puede borrar la inscripción?",
            "respuesta": "Sí, siempre y cuando sea dentro del plazo de inscripción establecido (ver fecha \"tope regular/libre\")."
        },
        {
            "pregunta": "¿Dónde puedo ver los cronogramas de exámenes finales?",
            "respuesta": "En el SAG, dentro del bloque de \"Consultas Académicas\" y también en la plataforma E-learning, en el tablón de \"Anuncios o Jefatura de carrera\"."
        },
        {
            "pregunta": "¿Cuántos turnos tengo para rendir durante el año?",
            "respuesta": "Podés rendir en turnos ordinarios, extraordinarios y especiales:\n" +
                         "- Ordinarios: noviembre-diciembre, febrero-marzo, junio-julio/agosto (2 llamados c/u).\n" +
                         "- Extraordinarios: mayo y septiembre (una materia por año, votada por los alumnos).\n" +
                         "- Especiales: abril (20-30), junio (1-10), octubre (1-10), noviembre (1-10), para quienes adeuden hasta 2 materias sin regularizar."
        },
        {
            "pregunta": "¿Cómo solicito revisión nota de exámenes?",
            "respuesta": "Podés solicitarla por correo electrónico a tu Unidad Académica, o mediante el formulario correspondiente disponible en la plataforma E-Learning."
        },
        {
            "pregunta": "¿Qué significa estar con licencia?",
            "respuesta": "Si necesitás suspender tus estudios, podés solicitar una licencia. No cursás ni abonás cuotas (si abonaste matrícula). Puede ser:\n" +
                         "- Semestral: Primer semestre (solicitud en marzo), Segundo semestre (solicitud en agosto).\n" +
                         "- Anual: Suspender cursado del año. En todos los casos, se requiere matrícula abonada del año en curso."
        },
        {
            "pregunta": "¿Puedo extender la regularidad de una materia?",
            "respuesta": "Sí, si se vencen los dos años. Podés extenderla por 6 meses a través del SAG, cumpliendo con:\n" +
                         "- La regularidad vencida dentro del año académico.\n" +
                         "- Se otorga una vez por materia.\n" +
                         "- Aplica sobre el 25% de las materias de la carrera.\n" +
                         "Para ingresos por equivalencias, se otorga proporcional a lo cursado en UCASAL."
        }
    ]
};

export const getFAQByCategory = (category: keyof FAQData): FAQItem[] => {
    return faq_data[category];
};

export const getAllFAQs = (): FAQItem[] => {
    return [...faq_data.durante_el_cursado, ...faq_data.examenes_finales];
};