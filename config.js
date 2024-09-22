const CONFIG = {
    imageWidth: 80,
    outputDir: 'dist',
    dataPath: "./data/Planilha sem título - Página1.csv",
    columnMap: {
        status: 0,
        dateAndHour: 3,
        fullName: 5,
        cpf: 7,
        superiorCourse: 11,
        technicalCourse: 13,
        requisition: 14
    },

    img: "data:image/jpeg;base64,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"
}

dataPath = "./data/Planilha sem título - Página1.csv"

module.exports = CONFIG