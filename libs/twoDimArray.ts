function twoDimArray<T>({ data, size }: { data: T[]; size: number }): T[][] {
    return data.flatMap((_, i, a) => {
        return i % size ? [] : [a.slice(i, i + size)];
    });
}

export default twoDimArray;
