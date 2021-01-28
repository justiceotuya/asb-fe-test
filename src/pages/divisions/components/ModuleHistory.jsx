import React from 'react'
import { moduleHistoryLog } from '../constant';
import { StyledModuleHistory, StyledSpeakerIcon } from './style/ModuleHistory.style';

export const ModuleHistory = () => {
    const [historyLog, setHistoryLog] = React.useState([])

    React.useEffect(() => {
       const handleSetLog = () => {
        setHistoryLog(moduleHistoryLog)
       }

       handleSetLog()
    }, [])

    return (
        <StyledModuleHistory>
            <div className="modules_history__header">
                <StyledSpeakerIcon />
                <h3> Module History</h3>
            </div>
            <div className="module_history__body">
                {
                    historyLog.map(log => {
                        const {activity, date, platform} = log
                        return      (
                        <div className="module_history__item" key={activity}>
                        <div className="item_decorator"></div>
                        <div>
                            <h3 className="module_history__title">{activity}</h3>
                            <div className="module_history__meta">
                                <p className="date">{date}</p>
                                <span className="divider"></span>
                                <p className="platform">{platform}</p>
                            </div>
                            </div>
                        </div>
                        )
                    })
                }
          </div>
        </StyledModuleHistory>
    )
}
