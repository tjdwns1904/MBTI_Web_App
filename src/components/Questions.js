import React, { useRef, useState } from "react";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Questions(props) {
    const { t } = props;
    const [idx, setIdx] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [scores, setScores] = useState({
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    });
    const result = useRef("");
    const questions = [
        { q: 'q1', A: 'q1A', B: 'q1B' },
        { q: 'q2', A: 'q2A', B: 'q2B' },
        { q: 'q3', A: 'q3A', B: 'q3B' },
        { q: 'q4', A: 'q4A', B: 'q4B' },
        { q: 'q5', A: 'q5A', B: 'q5B' },
        { q: 'q6', A: 'q6A', B: 'q6B' },
        { q: 'q7', A: 'q7A', B: 'q7B' },
        { q: 'q8', A: 'q8A', B: 'q8B' },
        { q: 'q9', A: 'q9A', B: 'q9B' },
        { q: 'q10', A: 'q10A', B: 'q10B' },
        { q: 'q11', A: 'q11A', B: 'q11B' },
        { q: 'q12', A: 'q12A', B: 'q12B' },
        { q: 'q13', A: 'q13A', B: 'q13B' },
        { q: 'q14', A: 'q14A', B: 'q14B' },
        { q: 'q15', A: 'q15A', B: 'q15B' },
        { q: 'q16', A: 'q16A', B: 'q16B' },
        { q: 'q17', A: 'q17A', B: 'q17B' },
        { q: 'q18', A: 'q18A', B: 'q18B' },
        { q: 'q19', A: 'q19A', B: 'q19B' },
        { q: 'q20', A: 'q20A', B: 'q20B' },
        { q: 'q21', A: 'q21A', B: 'q21B' },
        { q: 'q22', A: 'q22A', B: 'q22B' },
        { q: 'q23', A: 'q23A', B: 'q23B' },
        { q: 'q24', A: 'q24A', B: 'q24B' },
        { q: 'q25', A: 'q25A', B: 'q25B' },
        { q: 'q26', A: 'q26A', B: 'q26B' },
        { q: 'q27', A: 'q27A', B: 'q27B' },
        { q: 'q28', A: 'q28A', B: 'q28B' },
        { q: 'q29', A: 'q29A', B: 'q29B' },
        { q: 'q30', A: 'q30A', B: 'q30B' },
        { q: 'q31', A: 'q31A', B: 'q31B' },
        { q: 'q32', A: 'q32A', B: 'q32B' },
        { q: 'q33', A: 'q33A', B: 'q33B' },
        { q: 'q34', A: 'q34A', B: 'q34B' },
        { q: 'q35', A: 'q35A', B: 'q35B' },
        { q: 'q36', A: 'q36A', B: 'q36B' },
        { q: 'q37', A: 'q37A', B: 'q37B' },
        { q: 'q38', A: 'q38A', B: 'q38B' },
        { q: 'q39', A: 'q39A', B: 'q39B' },
        { q: 'q40', A: 'q40A', B: 'q40B' },
        { q: 'q41', A: 'q41A', B: 'q41B' },
        { q: 'q42', A: 'q42A', B: 'q42B' },
        { q: 'q43', A: 'q43A', B: 'q43B' },
        { q: 'q44', A: 'q44A', B: 'q44B' },
        { q: 'q45', A: 'q45A', B: 'q45B' },
        { q: 'q46', A: 'q46A', B: 'q46B' },
        { q: 'q47', A: 'q47A', B: 'q47B' },
        { q: 'q48', A: 'q48A', B: 'q48B' },
        { q: 'q49', A: 'q49A', B: 'q49B' },
        { q: 'q50', A: 'q50A', B: 'q50B' },
        { q: 'q51', A: 'q51A', B: 'q51B' },
        { q: 'q52', A: 'q52A', B: 'q52B' },
        { q: 'q53', A: 'q53A', B: 'q53B' },
        { q: 'q54', A: 'q54A', B: 'q54B' },
        { q: 'q55', A: 'q55A', B: 'q55B' },
        { q: 'q56', A: 'q56A', B: 'q56B' },
        { q: 'q57', A: 'q57A', B: 'q57B' },
        { q: 'q58', A: 'q58A', B: 'q58B' },
        { q: 'q59', A: 'q59A', B: 'q59B' },
        { q: 'q60', A: 'q60A', B: 'q60B' },
        { q: 'q61', A: 'q61A', B: 'q61B' },
        { q: 'q62', A: 'q62A', B: 'q62B' },
        { q: 'q63', A: 'q63A', B: 'q63B' },
        { q: 'q64', A: 'q64A', B: 'q64B' },
        { q: 'q65', A: 'q65A', B: 'q65B' },
        { q: 'q66', A: 'q66A', B: 'q66B' },
        { q: 'q67', A: 'q67A', B: 'q67B' },
        { q: 'q68', A: 'q68A', B: 'q68B' },
        { q: 'q69', A: 'q69A', B: 'q69B' },
        { q: 'q70', A: 'q70A', B: 'q70B' }
    ];
    const scoring = {
        'q1A': 'E', 'q1B': 'I', 'q2A': 'S', 'q2B': 'N', 'q3A': 'S', 'q3B': 'N', 'q4A': 'T', 'q4B': 'F', 'q5A': 'T', 'q5B': 'F', 'q6A': 'J', 'q6B': 'P', 'q7A': 'J', 'q7B': 'P',
        'q8A': 'E', 'q8B': 'I', 'q9A': 'S', 'q9B': 'N', 'q10A': 'S', 'q10B': 'N', 'q11A': 'T', 'q11B': 'F', 'q12A': 'T', 'q12B': 'F', 'q13A': 'J', 'q13B': 'P', 'q14A': 'J', 'q14B': 'P',
        'q15A': 'E', 'q15B': 'I', 'q16A': 'S', 'q16B': 'N', 'q17A': 'S', 'q17B': 'N', 'q18A': 'T', 'q18B': 'F', 'q19A': 'T', 'q19B': 'F', 'q20A': 'J', 'q20B': 'P', 'q21A': 'J', 'q21B': 'P',
        'q22A': 'E', 'q22B': 'I', 'q23A': 'S', 'q23B': 'N', 'q24A': 'S', 'q24B': 'N', 'q25A': 'T', 'q25B': 'F', 'q26A': 'T', 'q26B': 'F', 'q27A': 'J', 'q27B': 'P', 'q28A': 'J', 'q28B': 'P',
        'q29A': 'E', 'q29B': 'I', 'q30A': 'S', 'q30B': 'N', 'q31A': 'S', 'q31B': 'N', 'q32A': 'T', 'q32B': 'F', 'q33A': 'T', 'q33B': 'F', 'q34A': 'J', 'q34B': 'P', 'q35A': 'J', 'q35B': 'P',
        'q36A': 'E', 'q36B': 'I', 'q37A': 'S', 'q37B': 'N', 'q38A': 'S', 'q38B': 'N', 'q39A': 'T', 'q39B': 'F', 'q40A': 'T', 'q40B': 'F', 'q41A': 'J', 'q41B': 'P', 'q42A': 'J', 'q42B': 'P',
        'q43A': 'E', 'q43B': 'I', 'q44A': 'S', 'q44B': 'N', 'q45A': 'S', 'q45B': 'N', 'q46A': 'T', 'q46B': 'F', 'q47A': 'T', 'q47B': 'F', 'q48A': 'J', 'q48B': 'P', 'q49A': 'J', 'q49B': 'P',
        'q50A': 'E', 'q50B': 'I', 'q51A': 'S', 'q51B': 'N', 'q52A': 'S', 'q52B': 'N', 'q53A': 'T', 'q53B': 'F', 'q54A': 'T', 'q54B': 'F', 'q55A': 'J', 'q55B': 'P', 'q56A': 'J', 'q56B': 'P',
        'q57A': 'E', 'q57B': 'I', 'q58A': 'S', 'q58B': 'N', 'q59A': 'S', 'q59B': 'N', 'q60A': 'T', 'q60B': 'F', 'q61A': 'T', 'q61B': 'F', 'q62A': 'J', 'q62B': 'P', 'q63A': 'J', 'q63B': 'P',
        'q64A': 'E', 'q64B': 'I', 'q65A': 'S', 'q65B': 'N', 'q66A': 'S', 'q66B': 'N', 'q67A': 'T', 'q67B': 'F', 'q68A': 'T', 'q68B': 'F', 'q69A': 'J', 'q69B': 'P', 'q70A': 'J', 'q70B': 'P',
    }
    const handleClick = (e) => {
        const { id } = e.target;
        if (idx + 1 < 70) {
            setIdx(idx + 1);
            setScores({ ...scores, [scoring[id]]: scores[scoring[id]] + 1 });
        } else {
            calculate();
            setShowResult(true);
        }
    }
    const calculate = () => {
        if (result.current.length > 4) return;
        if (scores.E <= scores.I) {
            result.current += 'I';
        } else {
            result.current += 'E';
        }
        if (scores.S <= scores.N) {
            result.current += 'N';
        } else {
            result.current += 'S';
        }
        if (scores.T <= scores.F) {
            result.current += 'F';
        } else {
            result.current += 'T';
        }
        if (scores.J <= scores.P) {
            result.current += 'P';
        } else {
            result.current += 'J';
        }

        console.log(result.current);
    }
    return (
        <>
            {showResult ?
                <Results t={t} result={result.current} /> :
                <div className="question-container">
                    <p><span><FontAwesomeIcon icon={faChevronLeft}/></span> <strong>{idx + 1} / 70</strong> <span><FontAwesomeIcon icon={faChevronRight}/></span></p>
                    <h2>{t(questions[idx].q)}</h2>
                    <div className="btn-container">
                        <button id={questions[idx].A} onClick={(e) => {
                            e.preventDefault();
                            handleClick(e);
                        }}>{t(questions[idx].A)}</button>
                        <button id={questions[idx].B} onClick={(e) => {
                            e.preventDefault();
                            handleClick(e);
                        }}>{t(questions[idx].B)}</button>
                    </div>
                </div>
            }
        </>
    )
} 