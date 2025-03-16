import React, { useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useFetchFeedbackData = (setFeedbackData) => {
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
};
function FeedbackData({ setFeedbackData }) {
    useFetchFeedbackData(setFeedbackData);

    return null;
}

export default FeedbackData;