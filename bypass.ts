declare const Il2Cpp: any;

Il2Cpp.perform(() => {
    const AppUtils = Il2Cpp
        .domain
        .assembly("AnimalCompany")
        .image
        .class("AnimalCompany.AppUtils");

    const method = AppUtils.method("CalculatePhotonAppVersion");

    console.log("");

    const randomStrings = [
        "Tidal is the best",
        "tidal mogs tbh",
    ];

    for (let i = 0; i < randomStrings.length; i++) {
        console.log(`[debug ${i}] ${randomStrings[i]}`);
    }

    function has(length: number): string {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";

        for (let i = 0; i < length; i++) {
            result += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );
        }

        return result;
    }

    const session = has(12);

    console.log(`sessionID = ${session}`);

    method.implementation = function () {
        const spoofed = "bV-9DOdAQQh1ByeZzbCM";

        const currentTime = new Date().toLocaleTimeString();

        console.log(
            `[${currentTime}] Connected`
        );

        console.log(
            `sessionID checksum => ${has(24)}`
        );

        return Il2Cpp.string(spoofed);
    };
});
