import { DynamoDBClient, ListBackupsCommand } from "@aws-sdk/client-dynamodb";
import { envs } from "../config/envs";



export const dynamoDbClient = new DynamoDBClient({ 
    region: envs.AWS_REGION
});

