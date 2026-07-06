export function isErrorWithDetailArray(
    error: unknown
): error is { errors: { detail: string }[] } {
    if (typeof error !== 'object' || error === null) {
        return false;
    }
    const errObj = error as Record<string, unknown>;
    if (!('errors' in errObj) || !Array.isArray(errObj.errors) || errObj.errors.length === 0) {
        return false;
    }
    const firstError = errObj.errors[0];
    if (typeof firstError !== 'object' || firstError === null) {
        return false;
    }
    const firstErrorObj = firstError as Record<string, unknown>;
    return 'detail' in firstErrorObj && typeof firstErrorObj.detail === 'string';
}