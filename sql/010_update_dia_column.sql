-- Step 1: Add a new column dia_temp with date type
ALTER TABLE tontos ADD COLUMN dia_temp DATE;

-- Step 2: Set the values of dia_temp from dia
UPDATE tontos SET dia_temp = TO_DATE(dia, 'DD/MM/YYYY');

-- Step 3: Drop the old dia column
ALTER TABLE tontos DROP COLUMN dia;

-- Step 4: Rename dia_temp to dia
ALTER TABLE tontos RENAME COLUMN dia_temp TO dia;

-- Step 5: Set the new dia column to non-nullable
ALTER TABLE tontos ALTER COLUMN dia SET NOT NULL;