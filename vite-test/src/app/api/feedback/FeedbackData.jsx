import React, { useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

function FeedbackData({ setFeedbackData }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const reqData = await fetch(apiUrl);
                const resData = await reqData.json();
                setFeedbackData(resData);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };
        fetchData();
    }, [setFeedbackData]);

    return null;
}

export default FeedbackData;