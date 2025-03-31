/*
  # Create messages table for contact form

  1. New Tables
    - `messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `messages` table
    - Add policy for anonymous users to insert messages
    - Add policy for authenticated users to read messages
*/

CREATE TABLE IF NOT EXISTS messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserting messages
CREATE POLICY "Allow anonymous message submission" 
ON messages FOR INSERT 
TO anon
WITH CHECK (true);

-- Create policy to allow reading messages
CREATE POLICY "Allow authenticated users to read messages" 
ON messages FOR SELECT 
TO authenticated 
USING (true);