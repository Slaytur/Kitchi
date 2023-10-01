import React, { Component } from 'react';
import '../assets/scss/pages/recipe.scss';

interface TimerState {
    minutes: number
    seconds: number
    isRunning: boolean
    isCountingDown: boolean
    settingMinutes: number
    settingSeconds: number
}

class Timer extends Component<Record<string, unknown>, TimerState> {
    private timer: NodeJS.Timeout | null = null;

    constructor (props: Record<string, unknown>) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            isRunning: false,
            isCountingDown: false,
            settingMinutes: 0,
            settingSeconds: 0
        };
    }

    startTimer = (): void => {
        if (!this.state.isRunning) {
            if (this.state.isCountingDown) {
                this.timer = setInterval(this.countdown, 1000);
            } else {
                this.timer = setInterval(this.updateTimer, 1000);
            }
            this.setState({ isRunning: true });
        }
    };

    stopTimer = (): void => {
        if (this.timer !== null) {
            clearInterval(this.timer);
        }
        this.setState({ isRunning: false });
    };

    resetTimer = (): void => {
        if (this.timer !== null) {
            clearInterval(this.timer);
        }
        this.setState({ minutes: 0, seconds: 0, isRunning: false });
    };

    updateTimer = (): void => {
        const { minutes, seconds } = this.state;
        if (seconds < 59) {
            this.setState({ seconds: seconds + 1 });
        } else {
            this.setState({ minutes: minutes + 1, seconds: 0 });
        }
    };

    countdown = (): void => {
        const { minutes, seconds } = this.state;
        if (minutes === 0 && seconds === 0) {
            this.stopTimer();
        } else if (seconds === 0) {
            this.setState({ minutes: minutes - 1, seconds: 59 });
        } else {
            this.setState({ seconds: seconds - 1 });
        }
    };

    toggleTimerType = (): void => {
        this.resetTimer();
        this.setState((prevState) => ({ isCountingDown: !prevState.isCountingDown }));
    };

    handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const settingMinutes = parseInt(e.target.value, 10);
        this.setState({ settingMinutes });
    };

    handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const settingSeconds = parseInt(e.target.value, 10);
        this.setState({ settingSeconds });
    };

    applySetTime = (): void => {
        const { settingMinutes, settingSeconds } = this.state;
        this.setState({
            minutes: settingMinutes,
            seconds: settingSeconds,
            settingMinutes: 0,
            settingSeconds: 0
        });
    };

    render (): JSX.Element {
        const {
            minutes,
            seconds,
            isRunning,
            isCountingDown,
            settingMinutes,
            settingSeconds
        } = this.state;
        const timerTypeText = isCountingDown ? `Timer` : `Stopwatch`;

        return (
            <div className="tw-bg-[#aadc9f7b] tw-p-4 tw-rounded-lg tw-shadow-md">
                <h2 className="text-2xl tw-text-center font-bold mb-4">{timerTypeText}</h2>
                <div className="tw-mb-4 tw-text-center tw-text-9xl">
                    <span>
                        {minutes < 10 ? `0` : ``}
                        {minutes}
                    </span>
              :
                    <span>
                        {seconds < 10 ? `0` : ``}
                        {seconds}
                    </span>
                </div>
                <div className="tw-flex tw-place-content-center tw-flex-wrap tw-space-x-4">
                    <button
                        className={`tw-bg-[#2f7832] tw-text-white tw-px-4 tw-py-2 tw-rounded ${
                            isRunning ? `tw-opacity-50 tw-cursor-not-allowed` : ``
                        }`}
                        onClick={this.startTimer}
                        disabled={isRunning}
                    >
                Start
                    </button>
                    <button
                        className={`tw-bg-[#b13939] tw-text-white tw-px-4 tw-py-2 tw-rounded ${
                            !isRunning ? `tw-opacity-50 tw-cursor-not-allowed` : ``
                        }`}
                        onClick={this.stopTimer}
                        disabled={!isRunning}
                    >
                Stop
                    </button>
                    <button
                        className="tw-bg-[#6cb55c] tw-text-white tw-px-4 tw-py-2 tw-rounded"
                        onClick={this.resetTimer}
                    >
                Reset
                    </button>
                    <button
                        className="tw-bg-[#d1823ef1] tw-text-white tw-px-4 tw-py-2 tw-rounded"
                        onClick={this.toggleTimerType}
                    >
                Toggle Timer Type
                    </button>
                </div>
                <div className="tw-mt-4 tw-flex tw-flex-wrap tw-space-x-4">
                    <label className="tw-flex tw-items-center">
                Set Minutes:
                        <input
                            className="tw-ml-2 tw-border tw-rounded tw-px-2 tw-py-1"
                            type="number"
                            value={settingMinutes}
                            onChange={this.handleMinutesChange}
                        />
                    </label>
                    <label className="tw-flex tw-items-center">
                Set Seconds:
                        <input
                            className="tw-ml-2 tw-border tw-rounded tw-px-2 tw-py-1"
                            type="number"
                            value={settingSeconds}
                            onChange={this.handleSecondsChange}
                        />
                    </label>
                    <button
                        className="tw-bg-[#2f7832] tw-text-white tw-bg-gree tw-px-4 tw-py-2 tw-rounded"
                        onClick={this.applySetTime}
                    >
                Apply Set Time
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;
