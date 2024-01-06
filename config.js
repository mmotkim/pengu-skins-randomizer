function update(k, v) {
    let prefs = DataStore.get("sr_preferences");
    prefs[k] = v;

    DataStore.set("sr_preferences", prefs);
}

function get(k) {
    return DataStore.get("sr_preferences")[k];
}

function init() {
    if (!DataStore.has("sr_preferences"))
        DataStore.set("sr_preferences", {
            championId: 0,
            enableRandomize: true,
            highlightUnlocked: true
        });
}

export default {
    update: update,
    get: get,
    init: init
};
