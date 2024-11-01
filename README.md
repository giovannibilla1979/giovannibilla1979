<!DOCTYPE html>
<html lang="it">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generazione Documenti</title>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/docx/7.0.1/docx.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/docx@7.0.0/build/index.min.js"></script>
    <style>
       
    /* Definizione delle variabili per colori */
    :root {
        --primary-color: #2980b9;
        --secondary-color: #3498db;
        --bg-color: #f0f0f5;
        --text-color: #333;
        --card-bg: #ffffff;
        --shadow: rgba(0, 0, 0, 0.15);
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--bg-color);
        color: var(--text-color);
        margin: 0;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
    }

    .container {
        width: 90%;
        max-width: 1200px;
        background-color: var(--card-bg);
        padding: 30px;
        box-shadow: 0 5px 20px var(--shadow);
        border-radius: 12px;
        text-align: left;
    }

    .title {
        color: var(--primary-color);
        font-size: 2.5rem;
        margin-bottom: 30px;
        font-weight: 700;
        text-align: center;
    }

    .bigliettino {
        background-color: var(--primary-color);
        color: white;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 25px;
        text-align: center;
        transition: background-color 0.3s ease-in-out;
    }

    .bigliettino:hover {
        background-color: var(--secondary-color);
    }

    /* Ulteriori ottimizzazioni del CSS */
    /* ... */

        /* Stili generali */
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f0f0f5;
            color: #333;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
        }

        /* Stili per il contenitore */
        .container {
            width: 90%;
            max-width: 1200px;
            background-color: #ffffff;
            padding: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            border-radius: 12px;
            text-align: left;
        }

        /* Stili per il titolo principale */
        .title {
            color: #2980b9;
            font-size: 2.5rem;
            margin-bottom: 30px;
            font-weight: 700;
            text-align: center;
        }

        /* Stili per il bigliettino da visita */
        .bigliettino {
            background-color: #2980b9; /* Blu scuro */
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 25px;
            text-align: center;
        }

        .bigliettino h2 {
            margin: 0;
            font-size: 1.8rem;
        }

        .bigliettino p {
            margin: 5px 0;
            font-size: 1.1rem;
        }

        /* Stili per hover sul bigliettino da visita */
        .bigliettino:hover {
            background-color: #3498db;
            transition: background-color 0.3s ease-in-out;
        }

        /* Stili per i fieldset e le legend */
        fieldset {
            border: 2px solid #2980b9;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px;
            background-color: #f9f9f9;
        }

        legend {
            padding: 0 10px;
            font-weight: bold;
            color: #2980b9;
            font-size: 1.3rem;
        }

        /* Stili per etichette e input */
        label {
            display: block;
            margin-bottom: 6px;
            font-weight: 500;
        }

        input, select {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 15px;
            background-color: #ffffff;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        /* Layout delle righe del form */
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group.row {
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
        }

        .col {
            flex: 1;
            min-width: 200px;
        }

        /* Stili uniformi per i riquadri */
        .riquadro {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }

        .riquadro-interno {
            flex: 1 1 300px;
            max-width: 48%; /* Due per riga su schermi più grandi */
            padding: 15px;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            margin-bottom: 20px;
        }

        /* Stili responsive per schermi più piccoli */
        @media (max-width: 768px) {
            .form-group.row, .riquadro {
                flex-direction: column;
            }

            .col {
                min-width: 100%;
            }

            .riquadro-interno {
                max-width: 100%;
            }

            .container {
                width: 100%;
                padding: 20px;
            }

            .title {
                font-size: 1.8rem;
            }

            .bigliettino {
                padding: 15px;
            }
        }

        /* Stili per i pulsanti */
        input[type="submit"], input[type="button"] {
            background-color: #2980b9;
            color: white;
            border: none;
            padding: 15px;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: calc(50% - 10px);
            margin: 0 5px;
        }

        input[type="submit"]:hover, input[type="button"]:hover {
            background-color: #1A5276;
        }

        /* Stili per le somme di redditi e prestiti */
        #somma_redditi, #somma_prestiti {
            background-color: #e8f0fe;
            border: 1px solid #ccc;
            padding: 12px;
            border-radius: 5px;
            font-size: 16px;
            width: 100%;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
    </style>
    
</head>
 <body>
    <div class="container">
        <h1 class="title">Scheda Intervista per Consulenza di Mutuo</h1>

        <!-- Bigliettino da visita -->
        <div class="bigliettino">
            <h2>Giovanni Billa</h2>
            <p>Consulente del Credito</p>
            <p>Iscr. Ivass n. E00603936</p>
            <p>Cell. (+39) 3317596664</p>
            <p>Email: giovanni.billa@weunit.it</p>
            <p>Via Vincenzo Giuffrida, 202, 95128 Catania</p>
        </div>
   
</body>
 </html>
<div id="scheda_intervista">
        <form id="formMutuo" action="#" method="post">
        <fieldset>
            <legend>Primo Richiedente</legend>

            <!-- Flag per selezionare il primo richiedente con grafica migliorata -->
            <div class="form-group">
                <input type="checkbox" id="first_richiedente_check" onclick="toggleFirstRichiedente()">
                <label for="first_richiedente_check">Seleziona Primo Richiedente</label>
            </div>

            <!-- Campi Primo Richiedente, nascosti finché non si attiva il flag -->
            <div id="first_richiedente_section" style="display: none;">
                <!-- Inizia sezione per i dati anagrafici e di contatto -->
                <fieldset>
                    <legend>Dati Anagrafici e di Contatto Primo Richiedente</legend>

                    <!-- Nome e Cognome -->
                    <div class="form-group row">
                        <div class="col">
                            <label for="nome1">Nome:</label>
                            <input type="text" id="nome1" name="nome1">
                        </div>
                        <div class="col">
                            <label for="cognome1">Cognome:</label>
                            <input type="text" id="cognome1" name="cognome1" required>
                        </div>
                    </div>

                    <!-- Sesso e Data di Nascita -->
                    <div class="form-group row">
                        <div class="col">
                            <label for="sesso1">Sesso:</label>
                            <select id="sesso1" name="sesso1" required>
                                <option value="M">Maschio</option>
                                <option value="F">Femmina</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="dataNascita1">Data di Nascita:</label>
                            <input type="date" id="dataNascita1" name="dataNascita1" required>
                        </div>
                    </div>

                    <!-- Comune di Nascita e Codice Fiscale -->
                    <div class="form-group row">
                        <div class="col">
                            <label for="comuneNascita1">Comune di Nascita:</label>
                            <input type="text" id="comuneNascita1" name="comuneNascita1" required>
                        </div>
                        <div class="col">
                            <label for="codiceFiscale1">Codice Fiscale:</label>
                            <input type="text" id="codiceFiscale1" name="codiceFiscale1" readonly>
                        </div>
                    </div>
                <!-- Contatti (Telefono ed Email) -->
                <div class="form-group row">
                    <div class="col">
                        <label for="telefono1">Telefono:</label>
                        <input type="tel" id="telefono1" name="telefono1" pattern="[0-9]{10}" placeholder="Inserisci telefono">
                    </div>
                    <div class="col">
                        <label for="email1">Email:</label>
                        <input type="email" id="email1" name="email1" placeholder="Inserisci email">
                    </div>
                </div>

                <!-- Indirizzo di Residenza -->
                <div class="form-group row">
                    <div class="col">
                        <label for="indirizzo1">Indirizzo di Residenza:</label>
                        <input type="text" id="indirizzo1" name="indirizzo1" placeholder="Inserisci indirizzo">
                    </div>
                    <div class="col">
                        <label for="citta1">Città:</label>
                        <input type="text" id="citta1" name="citta1" placeholder="Inserisci città">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col">
                        <label for="cap1">CAP:</label>
                        <input type="text" id="cap1" name="cap1" placeholder="Inserisci CAP">
                    </div>
                    <div class="col">
                        <label for="provincia1">Provincia:</label>
                        <input type="text" id="provincia1" name="provincia1" placeholder="Inserisci provincia">
                    </div>
                </div>

                <!-- Stato Civile e Situazione Abitativa -->
                <div class="form-group row">
                    <div class="col">
                        <label for="statoCivile1">Stato Civile:</label>
                        <select id="statoCivile1" name="statoCivile1" required>
                            <option value="">Seleziona</option>
                            <option value="celibe">Celibe</option>
                            <option value="nubile">Nubile</option>
                            <option value="coniugato_comunione">Coniugato in Comunione dei Beni</option>
                            <option value="coniugato_separazione">Coniugato in Separazione dei Beni</option>
                            <option value="vedovo">Vedovo</option>
                            <option value="divorziato">Divorziato</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="abitazione1">Situazione Abitativa:</label>
                        <select id="abitazione1" name="abitazione1" required>
                            <option value="">Seleziona</option>
                            <option value="proprietario">Proprietario</option>
                            <option value="inquilino">Inquilino</option>
                            <option value="ospite">Ospite</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="nucleoF1">Numero Componenti Nucleo Familiare:</label>
                    <input type="number" id="nucleoF1" name="nucleoF1" required>
                </div>
            </fieldset>
            <!-- Fine Dati Anagrafici e di Contatto -->

</form> <fieldset>
    <legend>Calcolo Netto Mensile da Lordo Busta Paga (Primo Richiedente)</legend>

    <!-- Flag per attivare/disattivare la sezione del calcolo reddito -->
    <div class="form-group">
        <input type="checkbox" id="calcoloReddito_check" onclick="toggleCalcoloReddito()">
        <label for="calcoloReddito_check">Attiva Calcolo Netto Mensile da Lordo Busta Paga</label>
    </div>

    <!-- Sezione nascosta fino all'attivazione del flag -->
    <div id="calcoloReddito_section" style="display: none;">
        <div class="form-group row">
            <div class="col">
                <label for="redditoMensileLordo1">Reddito Mensile Lordo (€):</label>
                <input type="number" id="redditoMensileLordo1" name="redditoMensileLordo1" step="0.01" oninput="calcolaRedditoAnnuo(); calcolaRedditoNetto()">
            </div>
            <div class="col">
                <label for="percentualePartTime1">Percentuale Part Time (%):</label>
                <input type="number" id="percentualePartTime1" name="percentualePartTime1" step="0.01" oninput="calcolaRedditoAnnuo(); calcolaRedditoNetto()" placeholder="Inserisci %">
            </div>
            <div class="col">
                <label for="numeroMensilità1">Numero di Mensilità:</label>
                <select id="numeroMensilità1" name="numeroMensilità1" onchange="calcolaRedditoAnnuo(); calcolaRedditoNetto()">
                    <option value="12">12 Mensilità</option>
                    <option value="13">13 Mensilità</option>
                    <option value="14">14 Mensilità</option>
                </select>
            </div>
        </div>

        <!-- Campo per Reddito Annuo Lordo -->
        <div class="form-group">
            <label for="redditoAnnuoLordo1">Reddito Annuo Lordo (€):</label>
            <input type="number" id="redditoAnnuoLordo1" name="redditoAnnuoLordo1" readonly>
        </div>

        <!-- Reddito Mensile Netto Calcolato -->
        <div class="form-group">
            <label for="redditoMensileNetto1">Reddito Mensile Netto Calcolato (€):</label>
            <input type="number" id="redditoMensileNetto1" name="redditoMensileNetto1" readonly>
        </div>
    </div> </fieldset>

<fieldset>
    <legend>Calcolo Netto Mensile per Autonomo (Primo Richiedente)</legend>

    <label for="tipoLavoro">Seleziona il tipo di lavoratore:</label>
  <select id="tipoLavoro" name="tipoLavoro" onchange="toggleSezione()">
    <option value="">Seleziona...</option>
    <option value="ordinario">Lavoratore Autonomo Regime Ordinario</option>
    <option value="forfettario">Lavoratore Autonomo Regime Forfettario</option>
</select>


    <!-- Sezione Forfettario 2024 -->
    <div id="sezione_forfettario_2024" style="display:none;">
        <h3>Regime Forfettario Unico 2024</h3>
        <label for="lm34_2024">LM34 - Reddito Lordo 2024:</label>
        <input type="number" id="lm34_2024" name="lm34_2024" oninput="calcolaForfettario2024()">

        <label for="lm35_2024">LM35 - Contributi Previdenziali 2024:</label>
        <input type="number" id="lm35_2024" name="lm35_2024" oninput="calcolaForfettario2024()">

        <label for="lm36_2024">LM36 - Reddito Netto 2024:</label>
        <input type="number" id="lm36_2024" name="lm36_2024" readonly>

        <label for="lm39_2024">LM39 - Imposta Sostitutiva 2024 (15%):</label>
        <input type="number" id="lm39_2024" name="lm39_2024" readonly>

        <label for="lm_mensile_2024">Reddito Netto Mensile 2024:</label>
        <input type="number" id="lm_mensile_2024" name="lm_mensile_2024" readonly>
    </div>

    <!-- Sezione Forfettario 2023 -->
    <div id="sezione_forfettario_2023" style="display:none;">
        <h3>Regime Forfettario Unico 2023</h3>
        <label for="lm34_2023">LM34 - Reddito Lordo 2023:</label>
        <input type="number" id="lm34_2023" name="lm34_2023" oninput="calcolaForfettario2023()">

        <label for="lm35_2023">LM35 - Contributi Previdenziali 2023:</label>
        <input type="number" id="lm35_2023" name="lm35_2023" oninput="calcolaForfettario2023()">

        <label for="lm36_2023">LM36 - Reddito Netto 2023:</label>
        <input type="number" id="lm36_2023" name="lm36_2023" readonly>

        <label for="lm39_2023">LM39 - Imposta Sostitutiva 2023 (15%):</label>
        <input type="number" id="lm39_2023" name="lm39_2023" readonly>

        <label for="lm_mensile_2023">Reddito Netto Mensile 2023:</label>
        <input type="number" id="lm_mensile_2023" name="lm_mensile_2023" readonly>
    </div>

    <!-- Media Reddito Netto Mensile Forfettario -->
    <div id="media_reddito_netto_forfettario" style="display:none;">
        <h3>Media Reddito Netto Mensile Forfettario</h3>
        <label for="media_mensile_forfettario">Media Reddito Netto Mensile Forfettario:</label>
        <input type="number" id="media_mensile_forfettario" readonly>
    </div>

    <!-- Sezione Ordinario 2024 -->
    <div id="sezione_ordinario_2024" style="display:none;">
        <h3>Regime Ordinario Unico 2024</h3>
        <label for="rn1_2024">RN1 - Reddito Complessivo 2024:</label>
        <input type="number" id="rn1_2024" name="rn1_2024" oninput="calcolaOrdinario2024()">

        <label for="rn3_2024">RN3 - Oneri Deducibili 2024:</label>
        <input type="number" id="rn3_2024" name="rn3_2024" oninput="calcolaOrdinario2024()">

        <label for="rn4_2024">RN4 - Reddito Imponibile 2024:</label>
        <input type="number" id="rn4_2024" name="rn4_2024" readonly>

        <label for="rn26_2024">RN26 - Imposta Lorda 2024:</label>
        <input type="number" id="rn26_2024" name="rn26_2024" readonly>

        <label for="rv10_regionale_2024">RV10 - Addizionale Regionale 2024 (1.23%):</label>
        <input type="number" id="rv10_regionale_2024" name="rv10_regionale_2024" readonly>

        <label for="rv10_comunale_2024">RV10 - Addizionale Comunale 2024 (0.80%):</label>
        <input type="number" id="rv10_comunale_2024" name="rv10_comunale_2024" readonly>

        <label for="rn_mensile_2024">Reddito Netto Mensile 2024:</label>
        <input type="number" id="rn_mensile_2024" name="rn_mensile_2024" readonly>
    </div>

    <!-- Sezione Ordinario 2023 -->
    <div id="sezione_ordinario_2023" style="display:none;">
        <h3>Regime Ordinario Unico 2023</h3>
        <label for="rn1_2023">RN1 - Reddito Complessivo 2023:</label>
        <input type="number" id="rn1_2023" name="rn1_2023" oninput="calcolaOrdinario2023()">

        <label for="rn3_2023">RN3 - Oneri Deducibili 2023:</label>
        <input type="number" id="rn3_2023" name="rn3_2023" oninput="calcolaOrdinario2023()">

        <label for="rn4_2023">RN4 - Reddito Imponibile 2023:</label>
        <input type="number" id="rn4_2023" name="rn4_2023" readonly>

        <label for="rn26_2023">RN26 - Imposta Lorda 2023:</label>
        <input type="number" id="rn26_2023" name="rn26_2023" readonly>

        <label for="rv10_regionale_2023">RV10 - Addizionale Regionale 2023 (1.23%):</label>
        <input type="number" id="rv10_regionale_2023" name="rv10_regionale_2023" readonly>

        <label for="rv10_comunale_2023">RV10 - Addizionale Comunale 2023 (0.80%):</label>
        <input type="number" id="rv10_comunale_2023" name="rv10_comunale_2023" readonly>

        <label for="rn_mensile_2023">Reddito Netto Mensile 2023:</label>
        <input type="number" id="rn_mensile_2023" name="rn_mensile_2023" readonly>
    </div>

    <!-- Media Reddito Netto Mensile Ordinario -->
    <div id="media_reddito_netto_ordinario" style="display:none;">
        <h3>Media Reddito Netto Mensile Ordinario</h3>
        <label for="media_mensile_ordinario">Media Reddito Netto Mensile Ordinario:</label>
        <input type="number" id="media_mensile_ordinario" readonly>
    </div>
</fieldset>


            <!-- Reddito da Computare al Primo Richiedente -->
            <fieldset>
                <legend>Reddito Primo Richiedente</legend>
<div class="form-group row">
            <div class="col">
                <label for="tipologiaLavorativa1">Tipologia di Posizione Lavorativa:</label>
                <select id="tipologiaLavorativa1" name="tipologiaLavorativa1" required>
                    <option value="">Seleziona</option>
                    <option value="dipendente">Dipendente</option>
                    <option value="autonomo">Autonomo</option>
                    <option value="disoccupato">Disoccupato</option>
                    <option value="casalingo">Casalinga</option>
                </select>
            </div>
        </div>
 
               
                <!-- Reddito Mensile -->
                <div class="form-group">
                    <label for="redditoMensile1">Reddito Mensile (€):</label>
                    <input type="number" id="redditoMensile1" name="redditoMensile1" required>
                </div>

                <!-- Altri Redditi -->
                <div class="form-group">
                    <label for="altriRedditi1">Altri Redditi (€):<!-- Altri Redditi (€) -->
                    <input type="number" id="altriRedditi1" name="altriRedditi1">
                </div>

                <!-- Assegno Nucleo Familiare -->
                <div class="form-group">
                    <label for="assegnoNucleo1">Assegno Nucleo Familiare (€):</label>
                    <input type="number" id="assegnoNucleo1" name="assegnoNucleo1">
                </div>

                <!-- Prestiti in Corso -->
<div class="form-group">
    <label for="prestiti1">Prestiti in corso (€):</label>
    <input type="number" id="prestiti1" name="prestiti1">
</div>
</fieldset>
</div>
</fieldset>
</form>      

                    <!-- Sezione Secondo     Richiedente -->
</form>                
                   <form id="formMutuo" action="#" method="post">
    <fieldset>
        <legend>Secondo Richiedente</legend>

        <!-- Flag per selezionare il secondo richiedente con grafica migliorata -->
        <div class="form-group">
            <input type="checkbox" id="second_richiedente_check" onclick="toggleSecondRichiedente()">
            <label for="second_richiedente_check">Seleziona Secondo Richiedente</label>
        </div>

        <!-- Campi Secondo Richiedente, nascosti finché non si attiva il flag -->
        <div id="second_richiedente_section" style="display: none;">
            <!-- Inizia sezione per i dati anagrafici e di contatto -->
            <fieldset>
                <legend>Dati Anagrafici e di Contatto Secondo Richiedente</legend>

                <!-- Nome e Cognome -->
                <div class="form-group row">
                    <div class="col">
                        <label for="nome2">Nome:</label>
                        <input type="text" id="nome2" name="nome2">
                    </div>
                    <div class="col">
                        <label for="cognome2">Cognome:</label>
                        <input type="text" id="cognome2" name="cognome2" required>
                    </div>
                </div>

                <!-- Sesso e Data di Nascita -->
                <div class="form-group row">
                    <div class="col">
                        <label for="sesso2">Sesso:</label>
                        <select id="sesso2" name="sesso2" required>
                            <option value="M">Maschio</option>
                            <option value="F">Femmina</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="dataNascita2">Data di Nascita:</label>
                        <input type="date" id="dataNascita2" name="dataNascita2" required>
                    </div>
                </div>

                <!-- Comune di Nascita e Codice Fiscale -->
                <div class="form-group row">
                    <div class="col">
                        <label for="comuneNascita2">Comune di Nascita:</label>
                        <input type="text" id="comuneNascita2" name="comuneNascita2" required>
                    </div>
                    <div class="col">
                        <label for="codiceFiscale2">Codice Fiscale:</label>
                        <input type="text" id="codiceFiscale2" name="codiceFiscale2" readonly>
                    </div>
                </div>

                <!-- Contatti (Telefono ed Email) -->
                <div class="form-group row">
                    <div class="col">
                        <label for="telefono2">Telefono:</label>
                        <input type="tel" id="telefono2" name="telefono2" pattern="[0-9]{10}" placeholder="Inserisci telefono">
                    </div>
                    <div class="col">
                        <label for="email2">Email:</label>
                        <input type="email" id="email2" name="email2" placeholder="Inserisci email">
                    </div>
                </div>

                <!-- Indirizzo di Residenza -->
                <div class="form-group row">
                    <div class="col">
                        <label for="indirizzo2">Indirizzo di Residenza:</label>
                        <input type="text" id="indirizzo2" name="indirizzo2" placeholder="Inserisci indirizzo">
                    </div>
                    <div class="col">
                        <label for="citta2">Città:</label>
                        <input type="text" id="citta2" name="citta2" placeholder="Inserisci città">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col">
                        <label for="cap2">CAP:</label>
                        <input type="text" id="cap2" name="cap2" placeholder="Inserisci CAP">
                    </div>
                    <div class="col">
                        <label for="provincia2">Provincia:</label>
                        <input type="text" id="provincia2" name="provincia2" placeholder="Inserisci provincia">
                    </div>
                </div>

                <!-- Stato Civile e Situazione Abitativa -->
                <div class="form-group row">
                    <div class="col">
                        <label for="statoCivile2">Stato Civile:</label>
                        <select id="statoCivile2" name="statoCivile2" required>
                            <option value="">Seleziona</option>
                            <option value="celibe">Celibe</option>
                            <option value="nubile">Nubile</option>
                            <option value="coniugato_comunione">Coniugato in Comunione dei Beni</option>
                            <option value="coniugato_separazione">Coniugato in Separazione dei Beni</option>
                            <option value="vedovo">Vedovo</option>
                            <option value="divorziato">Divorziato</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="abitazione2">Situazione Abitativa:</label>
                        <select id="abitazione2" name="abitazione2" required>
                            <option value="">Seleziona</option>
                            <option value="proprietario">Proprietario</option>
                            <option value="inquilino">Inquilino</option>
                            <option value="ospite">Ospite</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="nucleoF2">Numero Componenti Nucleo Familiare:</label>
                    <input type="number" id="nucleoF2" name="nucleoF2" required>
                </div>
            </fieldset>
            <!-- Fine Dati Anagrafici e di Contatto -->
<fieldset>
    <legend>Calcolo Netto Mensile da Lordo Busta Paga (Secondo Richiedente)</legend>

    <!-- Flag per attivare/disattivare la sezione del calcolo reddito -->
    <div class="form-group">
        <input type="checkbox" id="calcoloReddito_check2" onclick="toggleCalcoloReddito2()">
        <label for="calcoloReddito_check2">Attiva Calcolo Netto Mensile da Lordo Busta Paga</label>
    </div>

    <!-- Sezione nascosta fino all'attivazione del flag -->
    <div id="calcoloReddito_section2" style="display: none;">
        <div class="form-group row">
            <div class="col">
                <label for="redditoMensileLordo2">Reddito Mensile Lordo (€):</label>
                <input type="number" id="redditoMensileLordo2" name="redditoMensileLordo2" step="0.01" oninput="calcolaRedditoAnnuo2(); calcolaRedditoNetto2()">
            </div>
            <div class="col">
                <label for="percentualePartTime2">Percentuale Part Time (%):</label>
                <input type="number" id="percentualePartTime2" name="percentualePartTime2" step="0.01" oninput="calcolaRedditoAnnuo2(); calcolaRedditoNetto2()" placeholder="Inserisci %">
            </div>
            <div class="col">
                <label for="numeroMensilità2">Numero di Mensilità:</label>
                <select id="numeroMensilità2" name="numeroMensilità2" onchange="calcolaRedditoAnnuo2(); calcolaRedditoNetto2()">
                    <option value="12">12 Mensilità</option>
                    <option value="13">13 Mensilità</option>
                    <option value="14">14 Mensilità</option>
                </select>
            </div>
        </div>

        <!-- Campo per Reddito Annuo Lordo -->
        <div class="form-group">
            <label for="redditoAnnuoLordo2">Reddito Annuo Lordo (€):</label>
            <input type="number" id="redditoAnnuoLordo2" name="redditoAnnuoLordo2" readonly>
        </div>

        <!-- Reddito Mensile Netto Calcolato -->
        <div class="form-group">
            <label for="redditoMensileNetto2">Reddito Mensile Netto Calcolato (€):</label>
            <input type="number" id="redditoMensileNetto2" name="redditoMensileNetto2" readonly>
        </div>
    </div>
</fieldset>

<fieldset>
    <legend>Calcolo Netto Mensile per Autonomo (Secondo Richiedente)</legend>

    <label for="tipoLavoro2">Seleziona il tipo di lavoratore:</label>
    <select id="tipoLavoro2" name="tipoLavoro2" onchange="toggleSezione2()">
        <option value="">Seleziona...</option>
        <option value="ordinario">Lavoratore Autonomo Regime Ordinario</option>
        <option value="forfettario">Lavoratore Autonomo Regime Forfettario</option>
    </select>

    <!-- Sezione Forfettario 2024 -->
    <div id="sezione_forfettario_2024_2" style="display:none;">
        <h3>Regime Forfettario Unico 2024</h3>
        <label for="lm34_2024_2">LM34 - Reddito Lordo 2024:</label>
        <input type="number" id="lm34_2024_2" name="lm34_2024_2" oninput="calcolaForfettario2024_2()">

        <label for="lm35_2024_2">LM35 - Contributi Previdenziali 2024:</label>
        <input type="number" id="lm35_2024_2" name="lm35_2024_2" oninput="calcolaForfettario2024_2()">

        <label for="lm36_2024_2">LM36 - Reddito Netto 2024:</label>
        <input type="number" id="lm36_2024_2" name="lm36_2024_2" readonly>

        <label for="lm39_2024_2">LM39 - Imposta Sostitutiva 2024 (15%):</label>
        <input type="number" id="lm39_2024_2" name="lm39_2024_2" readonly>

        <label for="lm_mensile_2024_2">Reddito Netto Mensile 2024:</label>
        <input type="number" id="lm_mensile_2024_2" name="lm_mensile_2024_2" readonly>
    </div>

    <!-- Sezione Forfettario 2023 -->
    <div id="sezione_forfettario_2023_2" style="display:none;">
        <h3>Regime Forfettario Unico 2023</h3>
        <label for="lm34_2023_2">LM34 - Reddito Lordo 2023:</label>
        <input type="number" id="lm34_2023_2" name="lm34_2023_2" oninput="calcolaForfettario2023_2()">

        <label for="lm35_2023_2">LM35 - Contributi Previdenziali 2023:</label>
        <input type="number" id="lm35_2023_2" name="lm35_2023_2" oninput="calcolaForfettario2023_2()">

        <label for="lm36_2023_2">LM36 - Reddito Netto 2023:</label>
        <input type="number" id="lm36_2023_2" name="lm36_2023_2" readonly>

        <label for="lm39_2023_2">LM39 - Imposta Sostitutiva 2023 (15%):</label>
        <input type="number" id="lm39_2023_2" name="lm39_2023_2" readonly>

        <label for="lm_mensile_2023_2">Reddito Netto Mensile 2023:</label>
        <input type="number" id="lm_mensile_2023_2" name="lm_mensile_2023_2" readonly>
    </div>

    <!-- Media Reddito Netto Mensile Forfettario -->
    <div id="media_reddito_netto_forfettario_2" style="display:none;">
        <h3>Media Reddito Netto Mensile Forfettario</h3>
        <label for="media_mensile_forfettario_2">Media Reddito Netto Mensile Forfettario:</label>
        <input type="number" id="media_mensile_forfettario_2" readonly>
    </div>

    <!-- Sezione Ordinario 2024 -->
    <div id="sezione_ordinario_2024_2" style="display:none;">
        <h3>Regime Ordinario Unico 2024</h3>
        <label for="rn1_2024_2">RN1 - Reddito Complessivo 2024:</label>
        <input type="number" id="rn1_2024_2" name="rn1_2024_2" oninput="calcolaOrdinario2024_2()">

        <label for="rn3_2024_2">RN3 - Oneri Deducibili 2024:</label>
        <input type="number" id="rn3_2024_2" name="rn3_2024_2" oninput="calcolaOrdinario2024_2()">

        <label for="rn4_2024_2">RN4 - Reddito Imponibile 2024:</label>
        <input type="number" id="rn4_2024_2" name="rn4_2024_2" readonly>

        <label for="rn26_2024_2">RN26 - Imposta Lorda 2024:</label>
        <input type="number" id="rn26_2024_2" name="rn26_2024_2" readonly>

        <label for="rv10_regionale_2024_2">RV10 - Addizionale Regionale 2024 (1.23%):</label>
        <input type="number" id="rv10_regionale_2024_2" name="rv10_regionale_2024_2" readonly>

        <label for="rv10_comunale_2024_2">RV10 - Addizionale Comunale 2024 (0.80%):</label>
        <input type="number" id="rv10_comunale_2024_2" name="rv10_comunale_2024_2" readonly>

        <label for="rn_mensile_2024_2">Reddito Netto Mensile 2024:</label>
        <input type="number" id="rn_mensile_2024_2" name="rn_mensile_2024_2" readonly>
    </div>

    <!-- Sezione Ordinario 2023 -->
    <div id="sezione_ordinario_2023_2" style="display:none;">
        <h3>Regime Ordinario Unico 2023</h3>
        <label for="rn1_2023_2">RN1 - Reddito Complessivo 2023:</label>
        <input type="number" id="rn1_2023_2" name="rn1_2023_2" oninput="calcolaOrdinario2023_2()">

        <label for="rn3_2023_2">RN3 - Oneri Deducibili 2023:</label>
        <input type="number" id="rn3_2023_2" name="rn3_2023_2" oninput="calcolaOrdinario2023_2()">

        <label for="rn4_2023_2">RN4 - Reddito Imponibile 2023:</label>
        <input type="number" id="rn4_2023_2" name="rn4_2023_2" readonly>

        <label for="rn26_2023_2">RN26 - Imposta Lorda 2023:</label>
        <input type="number" id="rn26_2023_2" name="rn26_2023_2" readonly>

        <label for="rv10_regionale_2023_2">RV10 - Addizionale Regionale 2023 (1.23%):</label>
        <input type="number" id="rv10_regionale_2023_2" name="rv10_regionale_2023_2" readonly>

        <label for="rv10_comunale_2023_2">RV10 - Addizionale Comunale 2023 (0.80%):</label>
        <input type="number" id="rv10_comunale_2023_2" name="rv10_comunale_2023_2" readonly>

        <label for="rn_mensile_2023_2">Reddito Netto Mensile 2023:</label>
        <input type="number" id="rn_mensile_2023_2" name="rn_mensile_2023_2" readonly>
    </div>

    <!-- Media Reddito Netto Mensile Ordinario -->
    <div id="media_reddito_netto_ordinario_2" style="display:none;">
        <h3>Media Reddito Netto Mensile Ordinario</h3>
        <label for="media_mensile_ordinario_2">Media Reddito Netto Mensile Ordinario:</label>
        <input type="number" id="media_mensile_ordinario_2" readonly>
    </div>
</fieldset>

            <!-- Reddito da Computare al Secondo Richiedente -->
            <fieldset>
                <legend>Reddito Secondo Richiedente</legend>
                <div class="form-group row">
                    <div class="col">
                        <label for="tipologiaLavorativa2">Tipologia di Posizione Lavorativa:</label>
                        <select id="tipologiaLavorativa2" name="tipologiaLavorativa2" required>
                            <option value="">Seleziona</option>
                            <option value="dipendente">Dipendente</option>
                            <option value="autonomo">Autonomo</option>
                            <option value="disoccupato">Disoccupato</option>
                            <option value="casalingo">Casalinga</option>
                        </select>
                    </div>
                </div>

                <!-- Reddito Mensile -->
                <div class="form-group">
                    <label for="redditoMensile2">Reddito Mensile (€):</label>
                    <input type="number" id="redditoMensile2" name="redditoMensile2" required>
                </div>

                <!-- Altri Redditi -->
                <div class="form-group">
                    <label for="altriRedditi2">Altri Redditi (€):</label>
                    <input type="number" id="altriRedditi2" name="altriRedditi2">
                </div>

                <!-- Assegno Nucleo Familiare -->
                <div class="form-group">
                    <label for="assegnoNucleo2">Assegno Nucleo Familiare (€):</label>
                    <input type="number" id="assegnoNucleo2" name="assegnoNucleo2">
                </div>
<!-- Prestiti in Corso -->
<div class="form-group">
    <label for="prestiti2">Prestiti in corso (€):</label>
    <input type="number" id="prestiti2" name="prestiti2">
</div>

            </fieldset>
        </div> <!-- Fine div second_richiedente_section -->
    </fieldset>
</form>               

<!-- Sezione Garante -->
<form id="formMutuoGarante" action="#" method="post">
    <fieldset>
        <legend>Garante</legend>

        <!-- Flag per selezionare il garante con grafica migliorata -->
        <div class="form-group">
            <input type="checkbox" id="garante_check" onclick="toggleGarante()">
            <label for="garante_check">Seleziona Garante</label>
        </div>

        <!-- Campi Garante, nascosti finché non si attiva il flag -->
        <div id="garante_section" style="display: none;">
    
            <!-- Inizia sezione per i dati anagrafici e di contatto -->
            <fieldset>
                <legend>Dati Anagrafici e di Contatto Garante</legend>

                <!-- Nome e Cognome -->
                <div class="form-group row">
                    <div class="col">
                        <label for="nomeGarante">Nome:</label>
                        <input type="text" id="nomeGarante" name="nomeGarante">
                    </div>
                    <div class="col">
                        <label for="cognomeGarante">Cognome:</label>
                        <input type="text" id="cognomeGarante" name="cognomeGarante" required>
                    </div>
                </div>

                <!-- Sesso e Data di Nascita -->
                <div class="form-group row">
                    <div class="col">
                        <label for="sessoGarante">Sesso:</label>
                        <select id="sessoGarante" name="sessoGarante" required>
                            <option value="M">Maschio</option>
                            <option value="F">Femmina</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="dataNascitaGarante">Data di Nascita:</label>
                        <input type="date" id="dataNascitaGarante" name="dataNascitaGarante" required>
                    </div>
                </div>

                <!-- Comune di Nascita e Codice Fiscale -->
                <div class="form-group row">
                    <div class="col">
                        <label for="comuneNascitaGarante">Comune di Nascita:</label>
                        <input type="text" id="comuneNascitaGarante" name="comuneNascitaGarante" required>
                    </div>
                    <div class="col">
                        <label for="codiceFiscaleGarante">Codice Fiscale:</label>
                        <input type="text" id="codiceFiscaleGarante" name="codiceFiscaleGarante" readonly>
                    </div>
                </div>

                <!-- Contatti (Telefono ed Email) -->
                <div class="form-group row">
                    <div class="col">
                        <label for="telefonoGarante">Telefono:</label>
                        <input type="tel" id="telefonoGarante" name="telefonoGarante" pattern="[0-9]{10}" placeholder="Inserisci telefono">
                    </div>
                    <div class="col">
                        <label for="emailGarante">Email:</label>
                        <input type="email" id="emailGarante" name="emailGarante" placeholder="Inserisci email">
                    </div>
                </div>

                <!-- Indirizzo di Residenza -->
                <div class="form-group row">
                    <div class="col">
                        <label for="indirizzoGarante">Indirizzo di Residenza:</label>
                        <input type="text" id="indirizzoGarante" name="indirizzoGarante" placeholder="Inserisci indirizzo">
                    </div>
                    <div class="col">
                        <label for="cittaGarante">Città:</label>
                        <input type="text" id="cittaGarante" name="cittaGarante" placeholder="Inserisci città">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col">
                        <label for="capGarante">CAP:</label>
                        <input type="text" id="capGarante" name="capGarante" placeholder="Inserisci CAP">
                    </div>
                    <div class="col">
                        <label for="provinciaGarante">Provincia:</label>
                        <input type="text" id="provinciaGarante" name="provinciaGarante" placeholder="Inserisci provincia">
                    </div>
                </div>

                <!-- Stato Civile e Situazione Abitativa -->
                <div class="form-group row">
                    <div class="col">
                        <label for="statoCivileGarante">Stato Civile:</label>
                        <select id="statoCivileGarante" name="statoCivileGarante" required>
                            <option value="">Seleziona</option>
                            <option value="celibe">Celibe</option>
                            <option value="nubile">Nubile</option>
                            <option value="coniugato_comunione">Coniugato in Comunione dei Beni</option>
                            <option value="coniugato_separazione">Coniugato in Separazione dei Beni</option>
                            <option value="vedovo">Vedovo</option>
                            <option value="divorziato">Divorziato</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="abitazioneGarante">Situazione Abitativa:</label>
                        <select id="abitazioneGarante" name="abitazioneGarante" required>
                            <option value="">Seleziona</option>
                            <option value="proprietario">Proprietario</option>
                            <option value="inquilino">Inquilino</option>
                            <option value="ospite">Ospite</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="nucleoFGarante">Numero Componenti Nucleo Familiare:</label>
                    <input type="number" id="nucleoFGarante" name="nucleoFGarante" required>
                </div>
            </fieldset>
            <!-- Fine Dati Anagrafici e di Contatto -->
    
</form>
        
 <fieldset>
    <legend>Calcolo Netto Mensile da Lordo Busta Paga (Garante)</legend>
    <div class="form-group">
        <input type="checkbox" id="calcoloReddito_checkGarante" onclick="toggleCalcoloRedditoGarante()">
        <label for="calcoloReddito_checkGarante">Attiva Calcolo Netto Mensile da Lordo Busta Paga</label>
    </div>
    <div id="calcoloReddito_sectionGarante" style="display: none;">
        <div class="form-group row">
            <div class="col">
                <label for="redditoMensileLordoGarante">Reddito Mensile Lordo (€):</label>
                <input type="number" id="redditoMensileLordoGarante" name="redditoMensileLordoGarante" step="0.01" oninput="calcolaRedditoAnnuoGarante(); calcolaRedditoNettoGarante()">
            </div>
            <div class="col">
                <label for="percentualePartTimeGarante">Percentuale Part Time (%):</label>
                <input type="number" id="percentualePartTimeGarante" name="percentualePartTimeGarante" step="0.01" oninput="calcolaRedditoAnnuoGarante(); calcolaRedditoNettoGarante()" placeholder="Inserisci %">
            </div>
            <div class="col">
                <label for="numeroMensilitàGarante">Numero di Mensilità:</label>
                <select id="numeroMensilitàGarante" name="numeroMensilitàGarante" onchange="calcolaRedditoAnnuoGarante(); calcolaRedditoNettoGarante()">
                    <option value="12">12 Mensilità</option>
                    <option value="13">13 Mensilità</option>
                    <option value="14">14 Mensilità</option>
                </select>
            </div>
        </div>

        <!-- Campo per Reddito Annuo Lordo -->
        <div class="form-group">
            <label for="redditoAnnuoLordoGarante">Reddito Annuo Lordo (€):</label>
            <input type="number" id="redditoAnnuoLordoGarante" name="redditoAnnuoLordoGarante" readonly>
        </div>

        <!-- Reddito Mensile Netto Calcolato -->
        <div class="form-group">
            <label for="redditoMensileNettoGarante">Reddito Mensile Netto Calcolato (€):</label>
            <input type="number" id="redditoMensileNettoGarante" name="redditoMensileNettoGarante" readonly>
        </div>
    </div>
</fieldset>

        <fieldset>
            <legend>Calcolo Netto Mensile per Autonomo (Garante)</legend>
            <label for="tipoLavoro_garante">Seleziona il tipo di lavoratore:</label>
            <select id="tipoLavoro_garante" name="tipoLavoro_garante" onchange="toggleSezioneGarante()">
                <option value="">Seleziona...</option>
                <option value="ordinario">Lavoratore Autonomo Regime Ordinario</option>
                <option value="forfettario">Lavoratore Autonomo Regime Forfettario</option>
            </select>

            <!-- Sezione Forfettario 2024 -->
            <div id="sezione_forfettario_2024_garante" style="display:none;">
                <h3>Regime Forfettario Unico 2024</h3>
                <label for="lm34_2024_garante">LM34 - Reddito Lordo 2024:</label>
                <input type="number" id="lm34_2024_garante" name="lm34_2024_garante" oninput="calcolaForfettario2024Garante()">

                <label for="lm35_2024_garante">LM35 - Contributi Previdenziali 2024:</label>
                <input type="number" id="lm35_2024_garante" name="lm35_2024_garante" oninput="calcolaForfettario2024Garante()">

                <label for="lm36_2024_garante">LM36 - Reddito Netto 2024:</label>
                <input type="number" id="lm36_2024_garante" name="lm36_2024_garante" readonly>

                <label for="lm39_2024_garante">LM39 - Imposta Sostitutiva 2024 (15%):</label>
                <input type="number" id="lm39_2024_garante" name="lm39_2024_garante" readonly>

                <label for="lm_mensile_2024_garante">Reddito Netto Mensile 2024:</label>
                <input type="number" id="lm_mensile_2024_garante" name="lm_mensile_2024_garante" readonly>
            </div>

            <!-- Sezione Forfettario 2023 -->
            <div id="sezione_forfettario_2023_garante" style="display:none;">
                <h3>Regime Forfettario Unico 2023</h3>
                <label for="lm34_2023_garante">LM34 - Reddito Lordo 2023:</label>
                <input type="number" id="lm34_2023_garante" name="lm34_2023_garante" oninput="calcolaForfettario2023Garante()">

                <label for="lm35_2023_garante">LM35 - Contributi Previdenziali 2023:</label>
                <input type="number" id="lm35_2023_garante" name="lm35_2023_garante" oninput="calcolaForfettario2023Garante()">

                <label for="lm36_2023_garante">LM36 - Reddito Netto 2023:</label>
                <input type="number" id="lm36_2023_garante" name="lm36_2023_garante" readonly>

                <label for="lm39_2023_garante">LM39 - Imposta Sostitutiva 2023 (15%):</label>
                <input type="number" id="lm39_2023_garante" name="lm39_2023_garante" readonly>

                <label for="lm_mensile_2023_garante">Reddito Netto Mensile 2023:</label>
                <input type="number" id="lm_mensile_2023_garante" name="lm_mensile_2023_garante" readonly>
            </div>

            <!-- Media Reddito Netto Mensile Forfettario -->
            <div id="media_reddito_netto_forfettario_garante" style="display:none;">
                <h3>Media Reddito Netto Mensile Forfettario</h3>
                <label for="media_mensile_forfettario_garante">Media Reddito Netto Mensile Forfettario:</label>
                <input type="number" id="media_mensile_forfettario_garante" readonly>
            </div>

            <!-- Sezione Ordinario 2024 -->
            <div id="sezione_ordinario_2024_garante" style="display:none;">
                <h3>Regime Ordinario Unico 2024</h3>
                <label for="rn1_2024_garante">RN1 - Reddito Complessivo 2024:</label>
                <input type="number" id="rn1_2024_garante" name="rn1_2024_garante" oninput="calcolaOrdinario2024Garante()">

                <label for="rn3_2024_garante">RN3 - Oneri Deducibili 2024:</label>
                <input type="number" id="rn3_2024_garante" name="rn3_2024_garante" oninput="calcolaOrdinario2024Garante()">

                <label for="rn4_2024_garante">RN4 - Reddito Imponibile 2024:</label>
                <input type="number" id="rn4_2024_garante" name="rn4_2024_garante" readonly>

                <label for="rn26_2024_garante">RN26 - Imposta Lorda 2024:</label>
                <input type="number" id="rn26_2024_garante" name="rn26_2024_garante" readonly>

                <label for="rv10_regionale_2024_garante">RV10 - Addizionale Regionale 2024 (1.23%):</label>
                <input type="number" id="rv10_regionale_2024_garante" name="rv10_regionale_2024_garante" readonly>

                <label for="rv10_comunale_2024_garante">RV10 - Addizionale Comunale 2024 (0.80%):</label>
                <input type="number" id="rv10_comunale_2024_garante" name="rv10_comunale_2024_garante" readonly>

                <label for="rn_mensile_2024_garante">Reddito Netto Mensile 2024:</label>
                <input type="number" id="rn_mensile_2024_garante" name="rn_mensile_2024_garante" readonly>
            </div>

            <!-- Sezione Ordinario 2023 -->
            <div id="sezione_ordinario_2023_garante" style="display:none;">
                <h3>Regime Ordinario Unico 2023</h3>
                <label for="rn1_2023_garante">RN1 - Reddito Complessivo 2023:</label>
                <input type="number" id="rn1_2023_garante" name="rn1_2023_garante" oninput="calcolaOrdinario2023Garante()">

               <label for="rn3_2023_garante">RN3 - Oneri Deducibili 2023:</label>
                <input type="number" id="rn3_2023_garante" name="rn3_2023_garante" oninput="calcolaOrdinario2023Garante()">

                <label for="rn4_2023_garante">RN4 - Reddito Imponibile 2023:</label>
                <input type="number" id="rn4_2023_garante" name="rn4_2023_garante" readonly>

                <label for="rn26_2023_garante">RN26 - Imposta Lorda 2023:</label>
                <input type="number" id="rn26_2023_garante" name="rn26_2023_garante" readonly>

                <label for="rv10_regionale_2023_garante">RV10 - Addizionale Regionale 2023 (1.23%):</label>
                <input type="number" id="rv10_regionale_2023_garante" name="rv10_regionale_2023_garante" readonly>

                <label for="rv10_comunale_2023_garante">RV10 - Addizionale Comunale 2023 (0.80%):</label>
                <input type="number" id="rv10_comunale_2023_garante" name="rv10_comunale_2023_garante" readonly>

                <label for="rn_mensile_2023_garante">Reddito Netto Mensile 2023:</label>
                <input type="number" id="rn_mensile_2023_garante" name="rn_mensile_2023_garante" readonly>
            </div>

            <!-- Media Reddito Netto Mensile Ordinario -->
            <div id="media_reddito_netto_ordinario_garante" style="display:none;">
                <h3>Media Reddito Netto Mensile Ordinario</h3>
                <label for="media_mensile_ordinario_garante">Media Reddito Netto Mensile Ordinario:</label>
                <input type="number" id="media_mensile_ordinario_garante" readonly>
            </div>
        </fieldset>
        
        <!-- Reddito da Computare al Garante -->
        <fieldset>
            <legend>Reddito Garante</legend>
            <div class="form-group row">
                <div class="col">
                    <label for="tipologiaLavorativa_garante">Tipologia di Posizione Lavorativa:</label>
                    <select id="tipologiaLavorativa_garante" name="tipologiaLavorativa_garante" required>
                        <option value="">Seleziona</option>
                        <option value="dipendente">Dipendente</option>
                        <option value="autonomo">Autonomo</option>
                        <option value="disoccupato">Disoccupato</option>
                        <option value="casalingo">Casalinga</option>
                    </select>
                </div>
            </div>

            <!-- Reddito Mensile -->
            <div class="form-group">
                <label for="redditoMensile_garante">Reddito Mensile (€):</label>
                <input type="number" id="redditoMensile_garante" name="redditoMensile_garante" required>
            </div>

            <!-- Altri Redditi -->
            <div class="form-group">
                <label for="altriRedditi_garante">Altri Redditi (€):</label>
                <input type="number" id="altriRedditi_garante" name="altriRedditi_garante">
            </div>

            <!-- Assegno Nucleo Familiare -->
            <div class="form-group">
                <label for="assegnoNucleo_garante">Assegno Nucleo Familiare (€):</label>
                <input type="number" id="assegnoNucleo_garante" name="assegnoNucleo_garante">
            </div>

            <!-- Prestiti in Corso -->
            <div class="form-group">
                <label for="prestiti_garante">Prestiti in corso (€):</label>
                <input type="number" id="prestiti_garante" name="pres titi_garante">
           </div>
            </fieldset>
        </div>
    </fieldset>
</form>

<form>       
    <fieldset>
            <!-- Somma Redditi e Prestiti -->
            <fieldset>
                <legend>Somma Redditi e Prestiti</legend>                <label for="somma_redditi">Somma Redditi Netti Mensili:</label>
                <input type="text" id="somma_redditi" name="somma_redditi" readonly>

                <label for="somma_prestiti">Somma Prestiti Mensili:</label>
                <input type="text" id="somma_prestiti" name="somma_prestiti" readonly>
              </div>
            </fieldset>
        </div>
    </fieldset>
</form> 

<form>      
    <fieldset>
   <!-- Preventivo di Mutuo -->
            <fieldset>
                <legend>Preventivo di Mutuo</legend>
                <label for="importo_mutuo">Importo del Mutuo Richiesto (€):</label>
                <input type="number" id="importo_mutuo" name="importo_mutuo" step="0.01" required>
                   </div>
           
                <label for="durata">Durata del Mutuo (anni):</label>
                <input type="number" id="durata" name="durata" step="1" required>

                <label for="tasso">Tasso di Interesse (%):</label>
                <input type="number" id="tasso" name="tasso" step="0.01">

                <label for="tipologia_mutuo">Tipologia di Mutuo:</label>
                <select id="tipologia_mutuo" name="tipologia_mutuo" required>
                    <option value="">Seleziona</option>
                    <option value="fisso">Fisso</option>
                    <option value="variabile">Variabile</option>
                    <option value="misto">Misto</option>
                </select>

                <label for="motivazione">Motivazione del Mutuo:</label>
                <select id="motivazione" name="motivazione" required>
                    <option value="">Seleziona</option>
                    <option value="acquisto_casa">Acquisto Prima Casa</option>
                    <option value="acquisto_investimento">Acquisto a Scopo di Investimento</option>
                    <option value="ristrutturazione">Ristrutturazione</option>
                    <option value="liquidita">Liquidità</option>
                </select>
               </div>
            </fieldset>
       
</form>             


 <fieldset>
    <legend>Calcolo Rata/Reddito</legend>
    <label for="rata_mensile">Rata Mensile Stimata (€):</label>
    <input type="text" id="rata_mensile" name="rata_mensile" readonly>

    <label for="rapporto_rata_reddito">Rapporto Rata/Reddito (%):</label>
    <input type="text" id="rapporto_rata_reddito" name="rapporto_rata_reddito" readonly>

   <!-- Pulsante per Generare il Preventivo in PDF -->
<div class="form-group">
    <button onclick="generaPDF()" style="padding: 10px 20px; font-size: 14px; border: none; background-color: #FFA500; color: white; border-radius: 5px;">
        Genera Preventivo in PDF
    </button>
</div>

<!-- Pulsante per Generare la Relazione in Word -->
<div class="form-group">
    <button onclick="generaDocumentoWord()" style="padding: 10px 20px; font-size: 14px; border: none; background-color: #28a745; color: white; border-radius: 5px;">
        Genera Relazione in Word
    </button>
</div>    
</fieldset>
 
<!-- Sezione per visualizzare la relazione aggiornata automaticamente -->
<fieldset>
    <legend>Relazione Intervista Mutuo</legend>
    <div id="relazione_output">
        <h3>Relazione Intervista Mutuo</h3>
        <p>I dati inseriti verranno mostrati qui in forma di relazione.</p>
    </div>
</fieldset>

             
<script>
        // Funzione per calcolare la somma di redditi e prestiti
    function calcolaSomma() {
        const reddito1 = parseFloat(document.getElementById("redditoMensile1").value) || 0;
        const altriRedditi1 = parseFloat(document.getElementById("altriRedditi1").value) || 0;
        const assegnoNucleo1 = parseFloat(document.getElementById("assegnoNucleo1").value) || 0;
        const prestiti1 = parseFloat(document.getElementById("prestiti1").value) || 0;

        let reddito2 = 0, altriRedditi2 = 0, assegnoNucleo2 = 0, prestiti2 = 0;
        let redditoGarante = 0, altriRedditiGarante = 0, assegnoNucleoGarante = 0, prestitiGarante = 0;

        if (document.getElementById("second_richiedente_check").checked) {
            reddito2 = parseFloat(document.getElementById("redditoMensile2").value) || 0;
            altriRedditi2 = parseFloat(document.getElementById("altriRedditi2").value) || 0;
            assegnoNucleo2 = parseFloat(document.getElementById("assegnoNucleo2").value) || 0;
            prestiti2 = parseFloat(document.getElementById("prestiti2").value) || 0;
        }

        if (document.getElementById("garante_check").checked) {
            redditoGarante = parseFloat(document.getElementById("redditoMensile_garante").value) || 0;
            altriRedditiGarante = parseFloat(document.getElementById("altriRedditi_garante").value) || 0;
            assegnoNucleoGarante = parseFloat(document.getElementById("assegnoNucleo_garante").value) || 0;
            prestitiGarante = parseFloat(document.getElementById("prestiti_garante").value) || 0;
        }

        const sommaRedditi = reddito1 + altriRedditi1 + assegnoNucleo1 +
                             reddito2 + altriRedditi2 + assegnoNucleo2 +
                             redditoGarante + altriRedditiGarante + assegnoNucleoGarante;
        const sommaPrestiti = prestiti1 + prestiti2 + prestitiGarante;

        document.getElementById("somma_redditi").value = sommaRedditi.toFixed(2);
        document.getElementById("somma_prestiti").value = sommaPrestiti.toFixed(2);
    }

    // Funzione per calcolare la rata del mutuo
    function calcolaRata() {
        const importoMutuo = parseFloat(document.getElementById("importo_mutuo").value) || 0;
        const tasso = parseFloat(document.getElementById("tasso").value) || 0;
        const durata = parseFloat(document.getElementById("durata").value) || 0;

        const tassoMensile = tasso / 1200; // Il tasso annuale diviso per 12 mesi e per 100
        const rataMensile = (importoMutuo * tassoMensile) / (1 - Math.pow(1 + tassoMensile, -durata * 12)) || 0;
       document.getElementById("rata_mensile").value = rataMensile.toFixed(2);
    }

    // Funzione per calcolare il rapporto rata/reddito
    function calcolaRapportoRataReddito() {
        const sommaRedditi = parseFloat(document.getElementById("somma_redditi").value) || 0;
        const rataMensile = parseFloat(document.getElementById("rata_mensile").value) || 0;
        const sommaPrestiti = parseFloat(document.getElementById("somma_prestiti").value) || 0;

        const rapportoRataReddito = ((rataMensile + sommaPrestiti) / sommaRedditi) * 100 || 0;
        document.getElementById("rapporto_rata_reddito").value = rapportoRataReddito.toFixed(2) + "%";
    }

    // Eventi per aggiornare i calcoli in tempo reale
    document.addEventListener("input", calcolaSomma);
    document.addEventListener("input", calcolaRata);
    document.addEventListener("input", calcolaRapportoRataReddito);
   
   </script>
<script>
    // Funzione per mostrare/nascondere la sezione del Primo Richiedente
function toggleFirstRichiedente() {
    const check = document.getElementById("first_richiedente_check");
    const section = document.getElementById("first_richiedente_section");
    section.style.display = check.checked ? "block" : "none";
}
function calcolaRedditoAnnuo() {
    // Ottieni i valori dai campi del primo richiedente
    let redditoMensileLordo = parseFloat(document.getElementById('redditoMensileLordo1').value) || 0;
    let percentualePartTime = parseFloat(document.getElementById('percentualePartTime1').value) || 100;
    let numeroMensilità = parseInt(document.getElementById('numeroMensilità1').value) || 12;

    // Calcola il reddito annuo lordo per il primo richiedente
    let redditoAnnuoLordo = (redditoMensileLordo * numeroMensilità * (percentualePartTime / 100)).toFixed(2);

    // Imposta il valore nel campo Reddito Annuo Lordo
    document.getElementById('redditoAnnuoLordo1').value = redditoAnnuoLordo;

    // Aggiorna il calcolo del reddito netto
    calcolaRedditoNetto();
}
function calcolaRedditoNetto() {
    // Ottieni i valori di input del primo richiedente
    let redditoAnnuoLordo = parseFloat(document.getElementById('redditoAnnuoLordo1').value) || 0;

    // Calcola i contributi previdenziali (esempio 9.19%)
    let contributiPrevidenziali = redditoAnnuoLordo * 0.0919;

    // Calcola il reddito imponibile dopo i contributi
    let redditoImponibile = redditoAnnuoLordo - contributiPrevidenziali;

    // Calcolo dell'IRPEF in base agli scaglioni 2024
    let impostaIRPEF = 0;

    if (redditoImponibile <= 15000) {
        impostaIRPEF = redditoImponibile * 0.23;
    } else if (redditoImponibile <= 28000) {
        impostaIRPEF = (15000 * 0.23) + ((redditoImponibile - 15000) * 0.25);
    } else if (redditoImponibile <= 50000) {
        impostaIRPEF = (15000 * 0.23) + (13000 * 0.25) + ((redditoImponibile - 28000) * 0.35);
    } else {
        impostaIRPEF = (15000 * 0.23) + (13000 * 0.25) + (22000 * 0.35) + ((redditoImponibile - 50000) * 0.43);
    }

    // Calcola le detrazioni (semplificazione; da affinare se necessario)
    let detrazioneBase = 1880; // Detrazione massima prevista per redditi fino a 15.000 €
    let detrazione = 0;

    if (redditoImponibile <= 15000) {
        detrazione = detrazioneBase;
    } else if (redditoImponibile <= 28000) {
        detrazione = detrazioneBase - ((redditoImponibile - 15000) * (detrazioneBase / 13000));
    } else if (redditoImponibile <= 50000) {
        detrazione = 0; // Da 28.000 a 50.000, la detrazione si riduce gradualmente a zero
    }

    // Calcolo dell'IRPEF netta
    let irpefNetta = impostaIRPEF - detrazione;
    irpefNetta = irpefNetta < 0 ? 0 : irpefNetta;

    // Calcolo del reddito netto
    let redditoNettoAnnuo = redditoAnnuoLordo - contributiPrevidenziali - irpefNetta;
    let redditoNettoMensile = redditoNettoAnnuo / 12;

    // Mostra il risultato nel campo "redditoMensileNetto1"
    document.getElementById('redditoMensileNetto1').value = redditoNettoMensile.toFixed(2);
}
// Funzione per mostrare/nascondere la sezione di calcolo reddito per il Primo Richiedente
function toggleCalcoloReddito() {
    const check = document.getElementById("calcoloReddito_check");
    const section = document.getElementById("calcoloReddito_section");
    section.style.display = check.checked ? "block" : "none";
}
function toggleSezione() {
    const tipoLavoro = document.getElementById("tipoLavoro").value;
    document.getElementById("sezione_forfettario_2024").style.display = tipoLavoro === "forfettario" ? "block" : "none";
    document.getElementById("sezione_forfettario_2023").style.display = tipoLavoro === "forfettario" ? "block" : "none";
    document.getElementById("sezione_ordinario_2024").style.display = tipoLavoro === "ordinario" ? "block" : "none";
    document.getElementById("sezione_ordinario_2023").style.display = tipoLavoro === "ordinario" ? "block" : "none";
    document.getElementById("media_reddito_netto").style.display = tipoLavoro ? "block" : "none";
}
function calcolaForfettario2024() {
    const redditoLordo = parseFloat(document.getElementById("lm34_2024").value) || 0;
    const contributi = parseFloat(document.getElementById("lm35_2024").value) || 0;
    const redditoNetto = redditoLordo - contributi;
    const impostaSostitutiva = redditoNetto * 0.15;
    const redditoNettoMensile = (redditoNetto - impostaSostitutiva) / 12;
 document.getElementById("lm36_2024").value = redditoNetto.toFixed(2);
    document.getElementById("lm39_2024").value = impostaSostitutiva.toFixed(2);
    document.getElementById("lm_mensile_2024").value = redditoNettoMensile.toFixed(2);

    calcolaMediaForfettario();
}
function calcolaForfettario2023() {
    const redditoLordo = parseFloat(document.getElementById("lm34_2023").value) || 0;
    const contributi = parseFloat(document.getElementById("lm35_2023").value) || 0;
    const redditoNetto = redditoLordo - contributi;
    const impostaSostitutiva = redditoNetto * 0.15;
    const redditoNettoMensile = (redditoNetto - impostaSostitutiva) / 12;
       document.getElementById("lm36_2023").value = redditoNetto.toFixed(2);
    document.getElementById("lm39_2023").value = impostaSostitutiva.toFixed(2);
    document.getElementById("lm_mensile_2023").value = redditoNettoMensile.toFixed(2);

    calcolaMediaForfettario();
}
function calcolaOrdinario2024() {
    const redditoComplessivo = parseFloat(document.getElementById("rn1_2024").value) || 0;
    const oneriDeducibili = parseFloat(document.getElementById("rn3_2024").value) || 0;
    const redditoImponibile = redditoComplessivo - oneriDeducibili;

    let impostaLorda = 0;
    if (redditoImponibile <= 15000) impostaLorda = redditoImponibile * 0.23;
    else if (redditoImponibile <= 28000) impostaLorda = 15000 * 0.23 + (redditoImponibile - 15000) * 0.25;
    else if (redditoImponibile <= 50000) impostaLorda = 15000 * 0.23 + 13000 * 0.25 + (redditoImponibile - 28000) * 0.35;
    else impostaLorda = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (redditoImponibile - 50000) * 0.43;

    const addizionaleRegionale = redditoImponibile * 0.0123;
    const addizionaleComunale = redditoImponibile * 0.008;
    const redditoNettoMensile = (redditoImponibile - impostaLorda - addizionaleRegionale - addizionaleComunale) / 12;

    document.getElementById("rn4_2024").value = redditoImponibile.toFixed(2);
    document.getElementById("rn26_2024").value = impostaLorda.toFixed(2);
    document.getElementById("rv10_regionale_2024").value = addizionaleRegionale.toFixed(2);
    document.getElementById("rv10_comunale_2024").value = addizionaleComunale.toFixed(2);
    document.getElementById("rn_mensile_2024").value = redditoNettoMensile.toFixed(2);

    calcolaMediaOrdinario();
}
function calcolaOrdinario2023() {
    const redditoComplessivo = parseFloat(document.getElementById("rn1_2023").value) || 0;
    const oneriDeducibili = parseFloat(document.getElementById("rn3_2023").value) || 0;
    const redditoImponibile = redditoComplessivo - oneriDeducibili;

    let impostaLorda = 0;
    if (redditoImponibile <= 15000) impostaLorda = redditoImponibile * 0.23;
    else if (redditoImponibile <= 28000) impostaLorda = 15000 * 0.23 + (redditoImponibile - 15000) * 0.25;
    else if (redditoImponibile <= 50000) impostaLorda = 15000 * 0.23 + 13000 * 0.25 + (redditoImponibile - 28000) * 0.35;
    else impostaLorda = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (redditoImponibile - 50000) * 0.43;

    const addizionaleRegionale = redditoImponibile * 0.0123;
    const addizionaleComunale = redditoImponibile * 0.008;
    const redditoNettoMensile = (redditoImponibile - impostaLorda - addizionaleRegionale - addizionaleComunale) / 12;
    document.getElementById("rn4_2023").value = redditoImponibile.toFixed(2);
    document.getElementById("rn26_2023").value = impostaLorda.toFixed(2);
    document.getElementById("rv10_regionale_2023").value = addizionaleRegionale.toFixed(2);
    document.getElementById("rv10_comunale_2023").value = addizionaleComunale.toFixed(2);
    document.getElementById("rn_mensile_2023").value = redditoNettoMensile.toFixed(2);

    calcolaMediaOrdinario();
}

function calcolaMediaForfettario() {
    const nettoForfettario2024 = parseFloat(document.getElementById("lm_mensile_2024").value) || 0;
    const nettoForfettario2023 = parseFloat(document.getElementById("lm_mensile_2023").value) || 0;
    const mediaForfettario = (nettoForfettario2024 + nettoForfettario2023) / 2;

    const mediaForfettarioField = document.getElementById("media_mensile_forfettario");
    if (mediaForfettarioField) {
        mediaForfettarioField.value = mediaForfettario.toFixed(2);}
}
function calcolaMediaOrdinario() {
    const nettoOrdinario2024 = parseFloat(document.getElementById("rn_mensile_2024").value) || 0;
    const nettoOrdinario2023 = parseFloat(document.getElementById("rn_mensile_2023").value) || 0;
    const mediaOrdinario = (nettoOrdinario2024 + nettoOrdinario2023) / 2;

    const mediaOrdinarioField = document.getElementById("media_mensile_ordinario");
    if (mediaOrdinarioField) {
        mediaOrdinarioField.value = mediaOrdinario.toFixed(2);
    }
}
</script>
<script>
// Funzione per mostrare/nascondere la sezione del Secondo Richiedente
function toggleSecondRichiedente() {
    const check = document.getElementById("second_richiedente_check");
    const section = document.getElementById("second_richiedente_section");
    section.style.display = check.checked ? "block" : "none";
}
// Funzione per mostrare/nascondere la sezione di calcolo reddito per il Secondo Richiedente
function toggleCalcoloReddito2() {
    const check = document.getElementById("calcoloReddito_check2");
    const section = document.getElementById("calcoloReddito_section2");
    section.style.display = check && check.checked ? "block" : "none";
}

// Funzione per calcolare il reddito annuo lordo per il secondo richiedente
function calcolaRedditoAnnuo2() {
    const redditoMensileLordo2 = parseFloat(document.getElementById('redditoMensileLordo2').value) || 0;
    const percentualePartTime2 = parseFloat(document.getElementById('percentualePartTime2').value) || 100;
    const numeroMensilità2 = parseInt(document.getElementById('numeroMensilità2').value) || 12;

    // Calcolo del reddito annuo lordo
    const redditoAnnuoLordo2 = (redditoMensileLordo2 * numeroMensilità2 * (percentualePartTime2 / 100)).toFixed(2);
    document.getElementById('redditoAnnuoLordo2').value = redditoAnnuoLordo2;

    // Calcola anche il reddito netto
    calcolaRedditoNetto2();
}

// Funzione per calcolare il reddito netto annuale e mensile per il secondo richiedente
function calcolaRedditoNetto2() {
    // Ottieni il reddito annuo lordo
    const redditoAnnuoLordo2 = parseFloat(document.getElementById('redditoAnnuoLordo2').value) || 0;

    // Calcolo dei contributi previdenziali
    const contributiPrevidenziali2 = redditoAnnuoLordo2 * 0.0919;

    // Reddito imponibile dopo i contributi
    const redditoImponibile2 = redditoAnnuoLordo2 - contributiPrevidenziali2;

    // Calcolo dell'IRPEF secondo gli scaglioni
    let impostaIRPEF2 = 0;

    if (redditoImponibile2 <= 15000) {
        impostaIRPEF2 = redditoImponibile2 * 0.23;
    } else if (redditoImponibile2 <= 28000) {
        impostaIRPEF2 = (15000 * 0.23) + ((redditoImponibile2 - 15000) * 0.25);
    } else if (redditoImponibile2 <= 50000) {
        impostaIRPEF2 = (15000 * 0.23) + (13000 * 0.25) + ((redditoImponibile2 - 28000) * 0.35);
    } else {
        impostaIRPEF2 = (15000 * 0.23) + (13000 * 0.25) + (22000 * 0.35) + ((redditoImponibile2 - 50000) * 0.43);
    }

    // Calcolo delle detrazioni base
    const detrazioneBase2 = 1880;
    let detrazione2 = 0;

    if (redditoImponibile2 <= 15000) {
        detrazione2 = detrazioneBase2;
    } else if (redditoImponibile2 <= 28000) {
        detrazione2 = detrazioneBase2 - ((redditoImponibile2 - 15000) * (detrazioneBase2 / 13000));
    }

    // IRPEF netta con detrazione
    const irpefNetta2 = Math.max(impostaIRPEF2 - detrazione2, 0);

    // Reddito netto annuale e mensile
    const redditoNettoAnnuo2 = redditoAnnuoLordo2 - contributiPrevidenziali2 - irpefNetta2;
    const redditoNettoMensile2 = (redditoNettoAnnuo2 / 12).toFixed(2);

    // Aggiorna il campo del reddito mensile netto
    document.getElementById('redditoMensileNetto2').value = redditoNettoMensile2;
}

// Event listener per aggiornare il calcolo quando i valori cambiano
document.getElementById("redditoMensileLordo2").addEventListener("input", calcolaRedditoAnnuo2);
document.getElementById("percentualePartTime2").addEventListener("input", calcolaRedditoAnnuo2);
document.getElementById("numeroMensilità2").addEventListener("input", calcolaRedditoAnnuo2);
document.getElementById("calcoloReddito_check2").addEventListener("change", toggleCalcoloReddito2);

// Funzione per mostrare/nascondere la sezione del tipo di lavoro per il Secondo Richiedente
function toggleSezione2() {
    const tipoLavoro2 = document.getElementById("tipoLavoro2").value;
    const isForfettario = tipoLavoro2 === "forfettario";
    const isOrdinario = tipoLavoro2 === "ordinario";

    // Mostra/nasconde le sezioni relative ai regimi
    document.getElementById("sezione_forfettario_2024_2").style.display = isForfettario ? "block" : "none";
    document.getElementById("sezione_forfettario_2023_2").style.display = isForfettario ? "block" : "none";
    document.getElementById("sezione_ordinario_2024_2").style.display = isOrdinario ? "block" : "none";
    document.getElementById("sezione_ordinario_2023_2").style.display = isOrdinario ? "block" : "none";

    // Mostra la sezione della media appropriata
    document.getElementById("media_reddito_netto_forfettario_2").style.display = isForfettario ? "block" : "none";
    document.getElementById("media_reddito_netto_ordinario_2").style.display = isOrdinario ? "block" : "none";
}
function calcolaForfettario2024_2() {
    const redditoLordo = parseFloat(document.getElementById("lm34_2024_2").value) || 0;
    const contributi = parseFloat(document.getElementById("lm35_2024_2").value) || 0;
    const redditoNetto = redditoLordo - contributi;
    const impostaSostitutiva = redditoNetto * 0.15;
    const redditoNettoMensile = (redditoNetto - impostaSostitutiva) / 12;
 document.getElementById("lm36_2024_2").value = redditoNetto.toFixed(2);
    document.getElementById("lm39_2024_2").value = impostaSostitutiva.toFixed(2);
    document.getElementById("lm_mensile_2024_2").value = redditoNettoMensile.toFixed(2);

    calcolaMediaForfettario2();
}
function calcolaForfettario2023_2() {
    const redditoLordo = parseFloat(document.getElementById("lm34_2023_2").value) || 0;
    const contributi = parseFloat(document.getElementById("lm35_2023_2").value) || 0;
    const redditoNetto = redditoLordo - contributi;
    const impostaSostitutiva = redditoNetto * 0.15;
    const redditoNettoMensile = (redditoNetto - impostaSostitutiva) / 12;
 document.getElementById("lm36_2023_2").value = redditoNetto.toFixed(2);
    document.getElementById("lm39_2023_2").value = impostaSostitutiva.toFixed(2);
    document.getElementById("lm_mensile_2023_2").value = redditoNettoMensile.toFixed(2);

    calcolaMediaForfettario2();
}
function calcolaOrdinario2024_2() {
    const redditoComplessivo = parseFloat(document.getElementById("rn1_2024_2").value) || 0;
    const oneriDeducibili = parseFloat(document.getElementById("rn3_2024_2").value) || 0;
    const redditoImponibile = redditoComplessivo - oneriDeducibili;

    let impostaLorda = 0;
    if (redditoImponibile <= 15000) impostaLorda = redditoImponibile * 0.23;
    else if (redditoImponibile <= 28000) impostaLorda = 15000 * 0.23 + (redditoImponibile - 15000) * 0.25;
    else if (redditoImponibile <= 50000) impostaLorda = 15000 * 0.23 + 13000 * 0.25 + (redditoImponibile - 28000) * 0.35;
    else impostaLorda = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (redditoImponibile - 50000) * 0.43;

    const addizionaleRegionale = redditoImponibile * 0.0123;
    const addizionaleComunale = redditoImponibile * 0.008;
    const redditoNettoMensile = (redditoImponibile - impostaLorda - addizionaleRegionale - addizionaleComunale) / 12;

    document.getElementById("rn4_2024_2").value = redditoImponibile.toFixed(2);
    document.getElementById("rn26_2024_2").value = impostaLorda.toFixed(2);
    document.getElementById("rv10_regionale_2024_2").value = addizionaleRegionale.toFixed(2);
    document.getElementById("rv10_comunale_2024_2").value = addizionaleComunale.toFixed(2);
    document.getElementById("rn_mensile_2024_2").value = redditoNettoMensile.toFixed(2);

    calcolaMediaOrdinario2();
}
function calcolaOrdinario2023_2() {
    const redditoComplessivo = parseFloat(document.getElementById("rn1_2023_2").value) || 0;
    const oneriDeducibili = parseFloat(document.getElementById("rn3_2023_2").value) || 0;
    const redditoImponibile = redditoComplessivo - oneriDeducibili;

    let impostaLorda = 0;
    if (redditoImponibile <= 15000) impostaLorda = redditoImponibile * 0.23;
    else if (redditoImponibile <= 28000) impostaLorda = 15000 * 0.23 + (redditoImponibile - 15000) * 0.25;
    else if (redditoImponibile <= 50000) impostaLorda = 15000 * 0.23 + 13000 * 0.25 + ((redditoImponibile - 28000) * 0.35);
    else impostaLorda = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (redditoImponibile - 50000) * 0.43;

    const addizionaleRegionale = redditoImponibile * 0.0123;
    const addizionaleComunale = redditoImponibile * 0.008;
    const redditoNettoMensile = (redditoImponibile - impostaLorda - addizionaleRegionale - addizionaleComunale) / 12;

    document.getElementById("rn4_2023_2").value = redditoImponibile.toFixed(2);
    document.getElementById("rn26_2023_2").value = impostaLorda.toFixed(2);
    document.getElementById("rv10_regionale_2023_2").value = addizionaleRegionale.toFixed(2);
    document.getElementById("rv10_comunale_2023_2").value = addizionaleComunale.toFixed(2);
    document.getElementById("rn_mensile_2023_2").value = redditoNettoMensile.toFixed(2);

    calcolaMediaOrdinario2();
}

function calcolaMediaForfettario2() {
    const nettoForfettario2024 = parseFloat(document.getElementById("lm_mensile_2024_2").value) || 0;
    const nettoForfettario2023 = parseFloat(document.getElementById("lm_mensile_2023_2").value) || 0;
    const mediaForfettario = (nettoForfettario2024 + nettoForfettario2023) / 2;

    const mediaForfettarioField = document.getElementById("media_mensile_forfettario_2");
    if (mediaForfettarioField) {
        mediaForfettarioField.value = mediaForfettario.toFixed(2);
    }
}

function calcolaMediaOrdinario2() {
    const nettoOrdinario2024 = parseFloat(document.getElementById("rn_mensile_2024_2").value) || 0;
    const nettoOrdinario2023 = parseFloat(document.getElementById("rn_mensile_2023_2").value) || 0;
    const mediaOrdinario = (nettoOrdinario2024 + nettoOrdinario2023) / 2;

    const mediaOrdinarioField = document.getElementById("media_mensile_ordinario_2");
    if (mediaOrdinarioField) {
        mediaOrdinarioField.value = mediaOrdinario.toFixed(2);
    }
}
  
    
  // Funzione per calcolare il reddito forfettario 2024 per il primo richiedente
    function calcolaForfettario2024() {
        const redditoLordo = parseFloat(document.getElementById("lm34_2024").value) || 0;
        const contributi = parseFloat(document.getElementById("lm35_2024").value) || 0;
        const redditoNetto = redditoLordo - contributi;
        const impostaSostitutiva = redditoNetto * 0.15; // Aliquota del regime forfettario
        const redditoNettoMensile = (redditoNetto - impostaSostitutiva) / 12;

        document.getElementById("lm36_2024").value = redditoNetto.toFixed(2);
        document.getElementById("lm39_2024").value = impostaSostitutiva.toFixed(2);
        document.getElementById("lm_mensile_2024").value = redditoNettoMensile.toFixed(2);

        calcolaMediaForfettario();
    }

    // Funzione per calcolare il reddito ordinario 2024 per il primo richiedente
    function calcolaOrdinario2024() {
        const redditoComplessivo = parseFloat(document.getElementById("rn1_2024").value) || 0;
        const oneriDeducibili = parseFloat(document.getElementById("rn3_2024").value) || 0;
        const redditoImponibile = redditoComplessivo - oneriDeducibili;

        let impostaLorda = 0;
        if (redditoImponibile <= 15000) impostaLorda = redditoImponibile * 0.23;
        else if (redditoImponibile <= 28000) impostaLorda = 15000 * 0.23 + (redditoImponibile - 15000) * 0.25;
        else if (redditoImponibile <= 50000) impostaLorda = 15000 * 0.23 + 13000 * 0.25 + (redditoImponibile - 28000) * 0.35;
        else impostaLorda = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (redditoImponibile - 50000) * 0.43;

        const addizionaleRegionale = redditoImponibile * 0.0123; // Esempio di aliquota regionale
        const addizionaleComunale = redditoImponibile * 0.008; // Esempio di aliquota comunale
        const redditoNettoMensile = (redditoImponibile - impostaLorda - addizionaleRegionale - addizionaleComunale) / 12;

        document.getElementById("rn4_2024").value = redditoImponibile.toFixed(2);
        document.getElementById("rn26_2024").value = impostaLorda.toFixed(2);
        document.getElementById("rv10_regionale_2024").value = addizionaleRegionale.toFixed(2);
        document.getElementById("rv10_comunale_2024").value = addizionaleComunale.toFixed(2);
        document.getElementById("rn_mensile_2024").value = redditoNettoMensile.toFixed(2);

        calcolaMediaOrdinario();
    }

    // Funzione per calcolare la media del reddito netto mensile forfettario per il primo richiedente
    function calcolaMediaForfettario() {
        const nettoForfettario2024 = parseFloat(document.getElementById("lm_mensile_2024").value) || 0;
        const nettoForfettario2023 = parseFloat(document.getElementById("lm_mensile_2023").value) || 0;
        const mediaForfettario = (nettoForfettario2024 + nettoForfettario2023) / 2;

        document.getElementById("media_mensile_forfettario").value = mediaForfettario.toFixed(2);
    }

    // Funzione per calcolare la media del reddito netto mensile ordinario per il primo richiedente
    function calcolaMediaOrdinario() {
        const nettoOrdinario2024 = parseFloat(document.getElementById("rn_mensile_2024").value) || 0;
        const nettoOrdinario2023 = parseFloat(document.getElementById("rn_mensile_2023").value) || 0;
        const mediaOrdinario = (nettoOrdinario2024 + nettoOrdinario2023) / 2;
       document.getElementById("media_mensile_ordinario").value = mediaOrdinario.toFixed(2);
    }
</script>
<script>
    // Funzione per mostrare/nascondere la sezione del Garante
    function toggleGarante() {
        const check = document.getElementById("garante_check");
        const section = document.getElementById("garante_section");
        section.style.display = check.checked ? "block" : "none";
    }
    // Funzione per mostrare/nascondere la sezione di calcolo reddito per il Garante
function toggleCalcoloRedditoGarante() {
    const check = document.getElementById("calcoloReddito_checkGarante");
    const section = document.getElementById("calcoloReddito_sectionGarante");
    section.style.display = check && check.checked ? "block" : "none";
}

// Funzione per calcolare il reddito annuo lordo per il Garante
function calcolaRedditoAnnuoGarante() {
    const redditoMensileLordoGarante = parseFloat(document.getElementById('redditoMensileLordoGarante').value) || 0;
    const percentualePartTimeGarante = parseFloat(document.getElementById('percentualePartTimeGarante').value) || 100;
    const numeroMensilitàGarante = parseInt(document.getElementById('numeroMensilitàGarante').value) || 12;

    // Calcolo del reddito annuo lordo
    const redditoAnnuoLordoGarante = (redditoMensileLordoGarante * numeroMensilitàGarante * (percentualePartTimeGarante / 100)).toFixed(2);
    document.getElementById('redditoAnnuoLordoGarante').value = redditoAnnuoLordoGarante;

    // Calcola anche il reddito netto
    calcolaRedditoNettoGarante();
}

// Funzione per calcolare il reddito netto annuale e mensile per il Garante
function calcolaRedditoNettoGarante() {
    // Ottieni il reddito annuo lordo
    const redditoAnnuoLordoGarante = parseFloat(document.getElementById('redditoAnnuoLordoGarante').value) || 0;

    // Calcolo dei contributi previdenziali
    const contributiPrevidenzialiGarante = redditoAnnuoLordoGarante * 0.0919;

    // Reddito imponibile dopo i contributi
    const redditoImponibileGarante = redditoAnnuoLordoGarante - contributiPrevidenzialiGarante;

    // Calcolo dell'IRPEF secondo gli scaglioni
    let impostaIRPEF_Garante = 0;

    if (redditoImponibileGarante <= 15000) {
        impostaIRPEF_Garante = redditoImponibileGarante * 0.23;
    } else if (redditoImponibileGarante <= 28000) {
        impostaIRPEF_Garante = (15000 * 0.23) + ((redditoImponibileGarante - 15000) * 0.25);
    } else if (redditoImponibileGarante <= 50000) {
        impostaIRPEF_Garante = (15000 * 0.23) + (13000 * 0.25) + ((redditoImponibileGarante - 28000) * 0.35);
    } else {
        impostaIRPEF_Garante = (15000 * 0.23) + (13000 * 0.25) + (22000 * 0.35) + ((redditoImponibileGarante - 50000) * 0.43);
    }

    // Calcolo delle detrazioni base
    const detrazioneBaseGarante = 1880;
    let detrazioneGarante = 0;

    if (redditoImponibileGarante <= 15000) {
        detrazioneGarante = detrazioneBaseGarante;
    } else if (redditoImponibileGarante <= 28000) {
        detrazioneGarante = detrazioneBaseGarante - ((redditoImponibileGarante - 15000) * (detrazioneBaseGarante / 13000));
    }

    // IRPEF netta con detrazione
    const irpefNettaGarante = Math.max(impostaIRPEF_Garante - detrazioneGarante, 0);

    // Reddito netto annuale e mensile
    const redditoNettoAnnuoGarante = redditoAnnuoLordoGarante - contributiPrevidenzialiGarante - irpefNettaGarante;
    const redditoNettoMensileGarante = (redditoNettoAnnuoGarante / 12).toFixed(2);

    // Aggiorna il campo del reddito mensile netto
    document.getElementById('redditoMensileNettoGarante').value = redditoNettoMensileGarante;
}

// Event listener per aggiornare il calcolo quando i valori cambiano
document.getElementById("redditoMensileLordoGarante").addEventListener("input", calcolaRedditoAnnuoGarante);
document.getElementById("percentualePartTimeGarante").addEventListener("input", calcolaRedditoAnnuoGarante);
document.getElementById("numeroMensilitàGarante").addEventListener("input", calcolaRedditoAnnuoGarante);
document.getElementById("calcoloReddito_checkGarante").addEventListener("change", toggleCalcoloRedditoGarante);
      // Funzione per mostrare/nascondere la sezione del tipo di lavoro per il Garante
function toggleSezioneGarante() {
    const tipoLavoroGarante = document.getElementById("tipoLavoro_garante").value;
    const isForfettario = tipoLavoroGarante === "forfettario";
    const isOrdinario = tipoLavoroGarante === "ordinario";
     // Mostra/nasconde le sezioni relative ai regimi
    document.getElementById("sezione_forfettario_2024_garante").style.display = isForfettario ? "block" : "none";
    document.getElementById("sezione_forfettario_2023_garante").style.display = isForfettario ? "block" : "none";
    document.getElementById("sezione_ordinario_2024_garante").style.display = isOrdinario ? "block" : "none";
    document.getElementById("sezione_ordinario_2023_garante").style.display = isOrdinario ? "block" : "none";

    // Mostra la sezione della media appropriata
    document.getElementById("media_reddito_netto_forfettario_garante").style.display = isForfettario ? "block" : "none";
    document.getElementById("media_reddito_netto_ordinario_garante").style.display = isOrdinario ? "block" : "none";
}
// Funzione per calcolare il reddito forfettario 2024 per il Garante
function calcolaForfettario2024Garante() {
    const redditoLordo = parseFloat(document.getElementById("lm34_2024_garante").value) || 0;
    const contributi = parseFloat(document.getElementById("lm35_2024_garante").value) || 0;
    const redditoNetto = redditoLordo - contributi;
    const impostaSostitutiva = redditoNetto * 0.15;
    const redditoNettoMensile = (redditoNetto - impostaSostitutiva) / 12;
    document.getElementById("lm36_2024_garante").value = redditoNetto.toFixed(2);
    document.getElementById("lm39_2024_garante").value = impostaSostitutiva.toFixed(2);
    document.getElementById("lm_mensile_2024_garante").value = redditoNettoMensile.toFixed(2);

    calcolaMediaForfettarioGarante();
}

// Funzione per calcolare il reddito forfettario 2023 per il Garante
function calcolaForfettario2023Garante() {
    const redditoLordo = parseFloat(document.getElementById("lm34_2023_garante").value) || 0;
    const contributi = parseFloat(document.getElementById("lm35_2023_garante").value) || 0;
    const redditoNetto = redditoLordo - contributi;
    const impostaSostitutiva = redditoNetto * 0.15;
    const redditoNettoMensile = (redditoNetto - impostaSostitutiva) / 12;

    document.getElementById("lm36_2023_garante").value = redditoNetto.toFixed(2);
    document.getElementById("lm39_2023_garante").value = impostaSostitutiva.toFixed(2);
    document.getElementById("lm_mensile_2023_garante").value = redditoNettoMensile.toFixed(2);

    calcolaMediaForfettarioGarante();
}

// Funzione per calcolare il reddito ordinario 2024 per il Garante
function calcolaOrdinario2024Garante() {
    const redditoComplessivo = parseFloat(document.getElementById("rn1_2024_garante").value) || 0;
    const oneriDeducibili = parseFloat(document.getElementById("rn3_2024_garante").value) || 0;
    const redditoImponibile = redditoComplessivo - oneriDeducibili;

    let impostaLorda = 0;
    if (redditoImponibile <= 15000) impostaLorda = redditoImponibile * 0.23;
    else if (redditoImponibile <= 28000) impostaLorda = 15000 * 0.23 + (redditoImponibile - 15000) * 0.25;
    else if (redditoImponibile <= 50000) impostaLorda = 15000 * 0.23 + 13000 * 0.25 + (redditoImponibile - 28000) * 0.35;
    else impostaLorda = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (redditoImponibile - 50000) * 0.43;

    const addizionaleRegionale = redditoImponibile * 0.0123;
    const addizionaleComunale = redditoImponibile * 0.008;
    const redditoNettoMensile = (redditoImponibile - impostaLorda - addizionaleRegionale - addizionaleComunale) / 12;

    document.getElementById("rn4_2024_garante").value = redditoImponibile.toFixed(2);
    document.getElementById("rn26_2024_garante").value = impostaLorda.toFixed(2);
    document.getElementById("rv10_regionale_2024_garante").value = addizionaleRegionale.toFixed(2);
    document.getElementById("rv10_comunale_2024_garante").value = addizionaleComunale.toFixed(2);
    document.getElementById("rn_mensile_2024_garante").value = redditoNettoMensile.toFixed(2);

    calcolaMediaOrdinarioGarante();
}

// Funzione per calcolare il reddito ordinario 2023 per il Garante
function calcolaOrdinario2023Garante() {
    const redditoComplessivo = parseFloat(document.getElementById("rn1_2023_garante").value) || 0;
    const oneriDeducibili = parseFloat(document.getElementById("rn3_2023_garante").value) || 0;
    const redditoImponibile = redditoComplessivo - oneriDeducibili;

    let impostaLorda = 0;
    if (redditoImponibile <= 15000) impostaLorda = redditoImponibile * 0.23;
    else if (redditoImponibile <= 28000) impostaLorda = 15000 * 0.23 + (redditoImponibile - 15000) * 0.25;
    else if (redditoImponibile <= 50000) impostaLorda = 15000 * 0.23 + 13000 * 0.25 + (redditoImponibile - 28000) * 0.35;
    else impostaLorda = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (redditoImponibile - 50000) * 0.43;

    const addizionaleRegionale = redditoImponibile * 0.0123;
    const addizionaleComunale = redditoImponibile * 0.008;
    const redditoNettoMensile = (redditoImponibile - impostaLorda - addizionaleRegionale - addizionaleComunale) / 12;

    document.getElementById("rn4_2023_garante").value = redditoImponibile.toFixed(2);
    document.getElementById("rn26_2023_garante").value = impostaLorda.toFixed(2);
    document.getElementById("rv10_regionale_2023_garante").value = addizionaleRegionale.toFixed(2);
    document.getElementById("rv10_comunale_2023_garante").value = addizionaleComunale.toFixed(2);
    document.getElementById("rn_mensile_2023_garante").value = redditoNettoMensile.toFixed(2);

    calcolaMediaOrdinarioGarante();
}
// Funzione per calcolare la media del reddito netto mensile forfettario per il Garante
function calcolaMediaForfettarioGarante() {
    const nettoForfettario2024 = parseFloat(document.getElementById("lm_mensile_2024_garante").value) || 0;
    const nettoForfettario2023 = parseFloat(document.getElementById("lm_mensile_2023_garante").value) || 0;
    const mediaForfettario = (nettoForfettario2024 + nettoForfettario2023) / 2;

    document.getElementById("media_mensile_forfettario_garante").value = mediaForfettario.toFixed(2);
}

// Funzione per calcolare la media del reddito netto mensile ordinario per il Garante
function calcolaMediaOrdinarioGarante() {
    const nettoOrdinario2024 = parseFloat(document.getElementById("rn_mensile_2024_garante").value) || 0;
    const nettoOrdinario2023 = parseFloat(document.getElementById("rn_mensile_2023_garante").value) || 0;
    const mediaOrdinario = (nettoOrdinario2024 + nettoOrdinario2023) / 2;

    document.getElementById("media_mensile_ordinario_garante").value = mediaOrdinario.toFixed(2);
}
</script>

<script>
// Funzione per aggiornare automaticamente la relazione con tutti i dati presenti nella scheda intervista
function aggiornaRelazione() {
    const relazione = document.getElementById("relazione_output"); // Div per mostrare la relazione
    if (!relazione) return; // Controlla se l'elemento esiste

    // Resetta il contenuto della relazione per evitare duplicazioni
    relazione.innerHTML = ""; 

    // Funzione per aggiungere paragrafi alla relazione
    function aggiungiParagrafo(label, value) {
        if (value) {
            const p = document.createElement("p");
            p.textContent = `${label}: ${value}`;
            relazione.appendChild(p);
        }
    }

    // Seleziona tutti gli input e select nella scheda intervista
    const campi = document.querySelectorAll("#scheda_intervista input, #scheda_intervista select");

    campi.forEach(campo => {
        const label = document.querySelector(`label[for="${campo.id}"]`);
        const labelText = label ? label.textContent : campo.name; // Usa il testo della label o il name dell'input
        aggiungiParagrafo(labelText, campo.value);
    });
}

// Event listener per aggiornare la relazione ogni volta che c'è un cambiamento nei campi della scheda intervista
document.querySelectorAll("#scheda_intervista input, #scheda_intervista select").forEach(element => {
    element.addEventListener("input", aggiornaRelazione);
});
 </script>

<!-- Assicurati di caricare le librerie prima di usare le funzioni -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/docx/6.1.0/docx.min.js">
    
</script>

<script>
function generaDocumentoWord() {
    const relazioneElement = document.getElementById("relazione_output");
    
    if (!relazioneElement) {
        console.error("Elemento 'relazione_output' non trovato.");
        return;
    }

    const relazioneContent = relazioneElement.innerText;

    const doc = new docx.Document({
        sections: [
            {
                properties: {
                    page: {
                        size: {
                            orientation: docx.PageOrientation.PORTRAIT,
                            width: docx.convertMillimetersToTwip(210),
                            height: docx.convertMillimetersToTwip(297),
                        },
                        margin: {
                            top: docx.convertMillimetersToTwip(20),
                            bottom: docx.convertMillimetersToTwip(20),
                            left: docx.convertMillimetersToTwip(25),
                            right: docx.convertMillimetersToTwip(25),
                        },
                    },
                },
                children: [
                    new docx.Paragraph({
                        text: "Giovanni Billa - Consulente del Credito",
                        heading: docx.HeadingLevel.HEADING_1,
                    }),
                    new docx.Paragraph({
                        text: "Iscr. Ivass n. E00603936",
                    }),
                    new docx.Paragraph({
                        text: "Cell. (+39) 3317596664",
                    }),
                    new docx.Paragraph({
                        text: "giovanni.billa@weunit.it",
                    }),
                    new docx.Paragraph({
                        text: "Via Vincenzo Giuffrida, 202, 95128 Catania",
                    }),
                    new docx.Paragraph({ text: "" }),
                    new docx.Paragraph({
                        text: "Relazione Intervista Mutuo",
                        heading: docx.HeadingLevel.HEADING_2,
                    }),
                    ...relazioneContent.split("\n").map(line => 
                        new docx.Paragraph({
                            text: line,
                            spacing: { line: 240 },
                        })
                    ),
                ],
            },
        ],
    });

    docx.Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "Relazione_Intervista_Mutuo.docx");
    });
}

function calcolaRata(importo, durata, tasso) {
    const tassoMensile = tasso / 100 / 12;
    const numeroRate = durata * 12;
    return ((importo * tassoMensile) / (1 - Math.pow(1 + tassoMensile, -numeroRate))).toFixed(2);
}

function generaPDF() {
    const importo = parseFloat(document.getElementById("importo_mutuo").value);
    const durata = parseInt(document.getElementById("durata").value);
    const tasso = parseFloat(document.getElementById("tasso").value);
    const rata = calcolaRata(importo, durata, tasso);

    const { jsPDF } = window.jspdf;
const doc = new jsPDF();
doc.setFillColor(255, 165, 0);
doc.rect(0, 0, 210, 297, 'F');
doc.setTextColor(0, 0, 0);
doc.setFontSize(14);
doc.text("Preventivo di Mutuo - Cliente", 105, 20, { align: "center" });

    doc.setFontSize(10);
    doc.text("Giovanni Billa - Consulente del Credito", 105, 40, { align: "center" });
    doc.text("Iscr. Ivass n. E00603936", 105, 45, { align: "center" });
    doc.text("Cell. (+39) 3317596664", 105, 50, { align: "center" });
    doc.text("giovanni.billa@weunit.it", 105, 55, { align: "center" });
    doc.text("Via Vincenzo Giuffrida, 202, 95128 Catania", 105, 60, { align: "center" });

    const data = [
        { label: "Nome e Cognome", value: document.getElementById("nome1").value + " " + document.getElementById("cognome1").value },
        { label: "Telefono", value: document.getElementById("telefono1").value },
        { label: "Email", value: document.getElementById("email1").value },
        { label: "Importo Mutuo Richiesto", value: "€ " + importo.toFixed(2) },
        { label: "Durata Mutuo (anni)", value: durata + " anni" },
        { label: "Tasso di Interesse", value: tasso + "%" },
        { label: "Tipologia di Mutuo", value: document.getElementById("tipologia_mutuo").value },
        { label: "Motivazione del Mutuo", value: document.getElementById("motivazione").value },
        { label: "Rata Mensile", value: "€ " + rata }
    ];

    let startY = 80;
    doc.setFontSize(12);
    data.forEach(row => {
        doc.text(row.label + ":", 20, startY);
        doc.text(row.value, 100, startY);
        startY += 10;
    });

    doc.save("preventivo_cliente.pdf");
}
</script>


    <!-- Libreria jsPDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>

    <!-- Il tuo script -->
    <script src="path/to/your/script.js"></script>
</body>
</html>
