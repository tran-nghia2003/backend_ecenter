"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMinigameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_minigame_dto_1 = require("./create-minigame.dto");
class UpdateMinigameDto extends (0, mapped_types_1.PartialType)(create_minigame_dto_1.CreateMinigameDto) {
}
exports.UpdateMinigameDto = UpdateMinigameDto;
//# sourceMappingURL=update-minigame.dto.js.map