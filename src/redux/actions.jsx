export const INCREMENT_HEART_CLICKS = 'INCREMENT_HEART_CLICKS';

export const incrementHeartClicks = () => ({
    type: INCREMENT_HEART_CLICKS
});

export const decrementHeartClicks = () => {
    return {
        type: 'DECREMENT_HEART_CLICKS'
    }
}