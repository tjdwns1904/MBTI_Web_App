import React, { useRef, useState } from "react";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

export default function Questions(props) {
    const { t, setLan } = props;
    const [idx, setIdx] = useState(0);
    const [showResult, setShowResult] = useState(false);
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
    const [answers, setAnswers] = useState({
        1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null, 12: null,
        13: null, 14: null, 15: null, 16: null, 17: null, 18: null, 19: null, 20: null, 21: null, 22: null, 23: null, 24: null,
        25: null, 26: null, 27: null, 28: null, 29: null, 30: null, 31: null, 32: null, 33: null, 34: null, 35: null, 36: null,
        37: null, 38: null, 39: null, 40: null, 41: null, 42: null, 43: null, 44: null, 45: null, 46: null, 47: null, 48: null,
        49: null, 50: null, 51: null, 52: null, 53: null, 54: null, 55: null, 56: null, 57: null, 58: null, 59: null, 60: null,
        61: null, 62: null, 63: null, 64: null, 65: null, 66: null, 67: null, 68: null, 69: null, 70: null
    });

    const handleClick = (e) => {
        const { id } = e.target;
        setAnswers({ ...answers, [idx + 1]: id });
        if (idx + 1 < 70) {
            setIdx(idx + 1);
        } else {
            let isFilled = true;
            for(let i = 1; i < 70; i++){
                if(!answers[i]){
                    isFilled = false;
                    break;
                }
            }
            if(isFilled)setShowResult(true);
            else alert(t('warning'));
        }
    }

    const handleDecrease = () => {
        if (idx - 1 >= 0) setIdx(idx - 1);
    }
    const handleIncrease = () => {
        if (idx + 1 < 70) setIdx(idx + 1);
    }
    return (
        <>
            {showResult ?
                <Results t={t} answers={answers} /> :
                <>
                    <Header setLan={setLan}/>
                    <div className="question-container">
                        <p>
                            <span onClick={handleDecrease}><FontAwesomeIcon icon={faChevronLeft} /></span> <strong>{idx + 1} / 70</strong> <span onClick={handleIncrease}><FontAwesomeIcon icon={faChevronRight} /></span>
                        </p>
                        <h2>{t(questions[idx].q)}</h2>
                        <div className="btn-container">
                            <button id={questions[idx].A} className={questions[idx].A === answers[idx + 1] ? "selected" : ""} onClick={(e) => {
                                e.preventDefault();
                                handleClick(e);
                            }}>{t(questions[idx].A)}</button>
                            <button id={questions[idx].B} className={questions[idx].B === answers[idx + 1] ? "selected" : ""} onClick={(e) => {
                                e.preventDefault();
                                handleClick(e);
                            }}>{t(questions[idx].B)}</button>
                        </div>
                    </div>
                </>
            }
        </>
    )
} 