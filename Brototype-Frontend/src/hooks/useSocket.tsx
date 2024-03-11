import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import Api from "../utils/baseUrl/baseUrl";

export const useSocket = (): Socket | null => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io("http://localhost:9001", {
            reconnect: true,
            secure: true,
            transports: ['polling', 'websocket'], //required
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };

    }, []);

    return socket;
};
