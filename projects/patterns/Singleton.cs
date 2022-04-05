// Singleton Example: Settings class
public class Settings {
    static Settings instance;
    int property1;
    int property2;
    int property3;

    private constructor () {
        // this constructor is only called once
    }

    static Settings getInstance () {
        if (Settings.instance is null) {
            Settings.instance = new Settings();
        }

        return Settings.instance;
    }
}