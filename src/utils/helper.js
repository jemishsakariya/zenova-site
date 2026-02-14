// Cookie Management
export const getCookie = (key) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.split('=');
        if (cookieKey === key) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

export const setCookie = (key, value, days = 7) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${key}=${encodeURIComponent(value)};${expires};path=/`;
};

export const removeCookie = (key) => {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export const removeAllCookies = () => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key] = cookie.split('=');
        removeCookie(key);
    }
};

// Formatting Helpers
export const formatDate = (value) => {
    if (!value) return '-';
    const date = new Date(value);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

export const formatDateTime = (value) => {
    if (!value) return '-';
    const date = new Date(value);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const formatRole = (value) => {
    if (!value) return '-';
    return value
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const formatStatus = (value) => {
    return value ? 'Active' : 'Inactive';
};

export const formatStringArray = (value) => {
    if (!value || !Array.isArray(value)) return '-';
    return value.join(', ');
};

// Form Helpers
export const getChangedFields = (current, original) => {
    const changed = {};

    for (const key in current) {
        if (JSON.stringify(current[key]) !== JSON.stringify(original[key])) {
            changed[key] = current[key];
        }
    }

    return changed;
};

// Constants
export const TOKEN_KEY = 'auth_token';
export const PROFILE_KEY = 'user_profile';
export const PAGE_SIZE = 10;
