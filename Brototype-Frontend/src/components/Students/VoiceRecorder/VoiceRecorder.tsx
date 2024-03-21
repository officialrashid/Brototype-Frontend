import React from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const VoiceRecorder = ({ onRecordingComplete }: any) => {
    const addAudioElement = (blob: any) => {
        onRecordingComplete(blob);
    };

    return (
        <AudioRecorder
            onRecordingComplete={addAudioElement}
            audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true,
            }}
            downloadOnSavePress={false}
            showVisualizer={true}
            downloadFileExtension="mp3"
        />
    );
}

export default VoiceRecorder;
