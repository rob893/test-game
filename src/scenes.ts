import {
    Scene,
    RectangleBackground,
    Color,
    GameObject,
    AssetPool,
    PrefabSettings,
    GameObjectConstructionParams,
    Component,
    Layer
} from '@entropy-engine/entropy-game-engine';

class TestGameObject extends GameObject {
    protected getPrefabSettings(): PrefabSettings {
        return {
            x: 0,
            y: 0,
            rotation: 0,
            id: 'test',
            layer: Layer.Default,
            tag: 'test'
        };
    }
    protected buildInitialComponents(_config: GameObjectConstructionParams): Component[] {
        return [];
    }
    
    public update() {
        const a = 1 + 1;
    }

    protected buildAndReturnChildGameObjects(_config: GameObjectConstructionParams) {
        return [];
    }
}

export const scene1: Scene = {
    name: 'Scene1',
    loadOrder: 1,
    terrainSpec: null,

    getSkybox(gameCanvas) {
        return new RectangleBackground(gameCanvas, Color.Black);
    },

    getStartingGameObjects(gameEngine) {
        return [new TestGameObject({gameEngine})];
    },

    async getAssetPool() {
        const pool = new Map();
        return new AssetPool(pool);
    }
};
