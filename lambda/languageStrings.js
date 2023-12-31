/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SKILL_NAME: 'Astro Facts',
            GET_FACT_MESSAGE: 'Here\'s your space fact: ',
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit to leave... What can I help you with?',
            HELP_REPROMPT: 'So, what will it be??',
            FALLBACK_MESSAGE: 'The Astro Facts skill can\'t help you with that.  It can help you discover facts about space if you say tell me a space fact. What can I help you with?',
            FALLBACK_REPROMPT: 'How can I help?',
            ERROR_MESSAGE: 'Sorry, something went wrong.',
            STOP_MESSAGE: 'Goodbye!',
            FACTS:
            [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'On Mars, the Sun appears about half the size as it does on Earth.',
                'Jupiter has the shortest day of all the planets.',
                'The Sun is an almost perfect sphere.',
                'A black hole can suck light in.',
                'May 1st is International space day. Celebrate!'
            ],
        }
    },
    es: {
        translation: {
            SKILL_NAME: 'hechos astronómicos',
            GET_FACT_MESSAGE: 'Aquí está tu curiosidad: ',
            HELP_MESSAGE: 'Puedes decir dime una curiosidad del espacio o puedes decir salir... Cómo te puedo ayudar?',
            HELP_REPROMPT: 'Como te puedo ayudar?',
            FALLBACK_MESSAGE: 'La skill hechos astronómicos no te puede ayudar con eso.  Te puede ayudar a descubrir curiosidades sobre el espacio si dices dime una curiosidad del espacio. Como te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error.',
            STOP_MESSAGE: 'Adiós!',
            FACTS:
                [
               
                'Un año en Mercurio es solo 88 días',
                "A pesar de estar más lejos del Sol, Venus experimenta temperaturas más altas que Mercurio",
                'En Marte, el Sol parece aproximadamente la mitad del tamaño que en la Tierra',
                'Júpiter tiene el día más corto de todos los planetas',
                'El sol es una esfera casi perfecta',
                "Un agujero negro puede absorber la luz"
                ],
        }
    },
    de: {
        translation: {
            SKILL_NAME: ' Astro Fakten',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            FALLBACK_MESSAGE: 'Die Weltraumfakten Skill kann dir dabei nicht helfen. Sie kann dir Fakten über den Raum erzählen, wenn du dannach fragst.',
            FALLBACK_REPROMPT: 'Wie kann ich dir helfen?',
            ERROR_MESSAGE: 'Es ist ein Fehler aufgetreten.',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            FACTS:
            [
               
                "Ein Jahr auf Merkur dauert nur 88 Tage.",
                "Obwohl die Venus weiter von der Sonne entfernt ist, hat sie höhere Temperaturen als Merkur.",
                "Auf dem Mars erscheint die Sonne etwa halb so groß wie auf der Erde.",
                'Jupiter hat den kürzesten Tag aller Planeten.',
                "Die Sonne ist eine fast perfekte Kugel.",
                "Ein Schwarzes Loch kann Licht ansaugen.",
            ],
        }
    },
    ja: {
        translation: {
            SKILL_NAME: '宇宙の事実',
            GET_FACT_MESSAGE: '知ってましたか？',
            HELP_MESSAGE: '豆知識を聞きたい時は「豆知識」と、終わりたい時は「おしまい」と言ってください。どうしますか？',
            HELP_REPROMPT: 'どうしますか？',
            ERROR_MESSAGE: '申し訳ありませんが、エラーが発生しました',
            STOP_MESSAGE: 'さようなら',
            FACTS:
            [
                '水星の一年はたった88日です。',
                '金星は水星と比べて太陽より遠くにありますが、気温は水星よりも高いです。',
                '金星は反時計回りに自転しています。過去に起こった隕石の衝突が原因と言われています。',
                '火星上から見ると、太陽の大きさは地球から見た場合の約半分に見えます。',
                '木星の<sub alias="いちにち">1日</sub>は全惑星の中で一番短いです。',
                '天の川銀河は約50億年後にアンドロメダ星雲と衝突します。',
                '「ブラックホールは光を吸収することができます。」'
            ],
        }
    },
    fr: {
        translation: {
            SKILL_NAME: ' faits astro',
            GET_FACT_MESSAGE: 'Voici votre anecdote : ',
            HELP_MESSAGE: 'Vous pouvez dire donne-moi une anecdote, ou, vous pouvez dire stop... Comment puis-je vous aider?',
            HELP_REPROMPT: 'Comment puis-je vous aider?',
            FALLBACK_MESSAGE: 'La skill des  faits astro ne peux vous aider avec cela. Je peux vous aider à découvrir des anecdotes sur l\'espace si vous dites par exemple, donne-moi une anecdote. Comment puis-je vous aider?',
            FALLBACK_REPROMPT: 'Comment puis-je vous aider?',
            ERROR_MESSAGE: 'Désolé, une erreur est survenue.',
            STOP_MESSAGE: 'Au revoir!',
            FACTS:
                [
                'Une année sur Mercure ne dure que 88 jours.',
                'En dépit de son éloignement du Soleil, Vénus connaît des températures plus élevées que sur Mercure.',
                'Sur Mars, le Soleil apparaît environ deux fois plus petit que sur Terre.',
                'De toutes les planètes, Jupiter a le jour le plus court.',
                'Le Soleil est une sphère presque parfaite.',
                "Un trou noir peut aspirer la lumière."
                ],
        }
    },
    it: {
        translation: {
            SKILL_NAME: 'fatti astro',
            GET_FACT_MESSAGE: 'Ecco il tuo aneddoto: ',
            HELP_MESSAGE: 'Puoi chiedermi un aneddoto dallo spazio o puoi chiudermi dicendo "esci"... Come posso aiutarti?',
            HELP_REPROMPT: 'Come posso aiutarti?',
            FALLBACK_MESSAGE: 'Non posso aiutarti con questo. Posso aiutarti a scoprire fatti e aneddoti sullo spazio, basta che mi chiedi di dirti un aneddoto. Come posso aiutarti?',
            FALLBACK_REPROMPT: 'Come posso aiutarti?',
            ERROR_MESSAGE: 'Spiacenti, si è verificato un errore.',
            STOP_MESSAGE: 'A presto!',
            FACTS:
            [
                'Sul pianeta Mercurio, un anno dura solamente 88 giorni.',
                'Pur essendo più lontana dal Sole, Venere ha temperature più alte di Mercurio.',
                'Su Marte il sole appare grande la metà che su la terra. ',
                'Tra tutti i pianeti del sistema solare, la giornata più corta è su Giove.',
                'Il Sole è quasi una sfera perfetta.',
                "Un buco nero può aspirare luce."
            ],
        }
    },
    pt: {
        translation: {
            SKILL_NAME: ' fatos astro',
            GET_FACT_MESSAGE: 'Aqui vai: ',
            HELP_MESSAGE: 'Você pode me perguntar por um fato interessante sobre o espaço, ou, fexar a skill. Como posso ajudar?',
            HELP_REPROMPT: 'O que vai ser?',
            FALLBACK_MESSAGE: 'A skill  fatos astro não tem uma resposta para isso. Ela pode contar informações interessantes sobre o espaço, é só perguntar. Como posso ajudar?',
            FALLBACK_REPROMPT: 'Eu posso contar fatos sobre o espaço. Como posso ajudar?',
            ERROR_MESSAGE: 'Desculpa, algo deu errado.',
            STOP_MESSAGE: 'Tchau!',
            FACTS:
            [
                'Um ano em Mercúrio só dura 88 dias.',
                'Apesar de ser mais distante do sol, Venus é mais quente que Mercúrio.',
                'Visto de marte, o sol parece ser metade to tamanho que nós vemos da terra.',
                'Júpiter tem os dias mais curtos entre os planetas no nosso sistema solar.',
                'O sol é quase uma esfera perfeita.',
                "Um buraco negro pode sugar a luz."
            ],
        }
    },
    hi: {
        translation: {
            SKILL_NAME: ' एस्ट्रो तथ्य',
            GET_FACT_MESSAGE: 'ये लीजिए आपका fact: ',
            HELP_MESSAGE: 'आप मुझे नया fact सुनाओ बोल सकते हैं या फिर exit भी बोल सकते हैं... आप क्या करना चाहेंगे?',
            HELP_REPROMPT: 'मैं आपकी किस प्रकार से सहायता कर सकती हूँ?',
            ERROR_MESSAGE: 'सॉरी, मैं वो समज नहीं पायी. क्या आप repeat कर सकते हैं?',
            STOP_MESSAGE: 'अच्छा bye, फिर मिलते हैं',
            FACTS:
            [
                'बुध गृह में एक साल में केवल अठासी दिन होते हैं',
                'सूरज से दूर होने के बावजूद, Venus का तापमान Mercury से ज़्यादा होता हैं',
                'Earth के तुलना से Mars में सूरज का size तक़रीबन आधा हैं',
                'सारे ग्रहों में Jupiter का दिन सबसे कम हैं',
                'सूरज का shape एकदम गेंद आकार मेंह,ं',
                'एक ब्लैक होल प्रकाश को चूस सकता है।'
            ],
        }
    }
}