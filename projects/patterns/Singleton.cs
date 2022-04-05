// Singleton Example: Settings class
public class Settings {
    static Settings _instance;
    bool property1;
    int property2;
    float property3;

    private Settings () {
        // this constructor is only called once
    }

    static Settings getInstance () {
        if (Settings._instance is null) {
            Settings._instance = new Settings();
        }

        return Settings._instance;
    }
}