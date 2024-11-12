import { DynamoDBClient,GetItemCommand,GetItemCommandInput,GetItemCommandOutput} from "@aws-sdk/client-dynamodb";
import { PlanetStarwarsRepository } from "../domain/repository/PlanetStarwarsRepository";
import { PlanetToSpanish } from "../domain/mapper/PlanetToSpanish";
import { mapToSpanishAttributes } from "../domain/mapper/mapToSpanishAttributes";

export class PlanetRepositoryImpl implements PlanetStarwarsRepository {

    private readonly tableName = "planet";

    constructor(private dynamoDbClient: DynamoDBClient) { }

    async find(id: string): Promise<PlanetToSpanish> {




        try {
            const input : GetItemCommandInput = {
                "Key": {
                  "id_planet": {
                    "S": id
                  }
                },
                "TableName": this.tableName
              };

            const command = new GetItemCommand(input);

            const data : GetItemCommandOutput = await this.dynamoDbClient.send(command);
            
            if (data.Item) {
                const planet = mapToSpanishAttributes(data.Item);
                return planet;
            } else {
                throw new Error("Planet not found.");
            }

        } catch (error) {
            console.log(error)
            console.error("Error saving item:", error);
            throw error;
        }



    }
}
