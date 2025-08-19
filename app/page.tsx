"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Coming Soon */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-foreground mb-4 font-serif"
            >
              SOON!! ~ COMING SOON!
            </motion.h1>

            <div className="grid md:grid-cols-3 gap-8 items-center mt-16">
              {/* Mobster Character */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-64 h-80 bg-muted rounded-lg shadow-2xl mb-4 overflow-hidden">
                  <img src="/1950s-mobster.png" alt="Mobster Boss" className="w-full h-full object-cover" />
                </div>
                <div className="bg-card p-4 rounded-lg shadow-lg">
                  <p className="text-lg font-bold text-foreground">"Do da whack!"</p>
                  <p className="text-sm text-muted-foreground">— Unknown Mob Boss</p>
                </div>
              </motion.div>

              {/* Game Title and Description */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">Tic Tac Whack!</h2>
                <Badge variant="secondary" className="text-lg px-4 py-2 mb-6">
                  Board Game
                </Badge>
                <p className="text-xl text-muted-foreground italic mb-8">
                  A nostalgic game of strategy, chance and player revenge
                </p>
                <Button size="lg" className="text-lg px-8 py-4">
                  Sign up?
                </Button>
              </motion.div>

              {/* Gold Coins */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center"
              >
                <div className="w-64 h-80 bg-muted rounded-lg shadow-2xl overflow-hidden">
                  <img src="/1950s-gold-coins.png" alt="Gold Coins" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Game Description Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-foreground mb-6 font-serif">
                Tic Tac Whack!
                <span className="block text-2xl text-muted-foreground mt-2">board game</span>
              </h2>

              <p className="text-xl text-muted-foreground italic mb-8">
                A nostalgic game of strategy, chance and player revenge
              </p>

              <div className="space-y-6 text-foreground">
                <h3 className="text-2xl font-bold">Mobsters, Gold Coins, and getting "Whacked"</h3>

                <p className="text-lg leading-relaxed">
                  Tic Tac Whack is a fast paced, easy to learn board game that blends "Tic Tac Toe", "Bingo", "Left
                  Right Center" and "Dice Shooting" all into one exciting experience. Players will need some luck to win
                  (always possible in this game). BUT they will also need to master a strategy - - - and - - - must be
                  MORE than willing to exact a ruthless revenge on their fellow players!
                </p>

                <p className="text-lg leading-relaxed">
                  Did you know that Tic Tac Toe was one of the FIRST video games ever created in 1952 for the EDSAC
                  computer? And did you know that the peak years for organized Mobster crime in the United States was
                  from the 1930's to 1960's? What do these two things have in common? Absolutely nothing! But we thought
                  it would be fun to bring them together in this energy packed, easy to learn board game, stylishly
                  designed with an old fashioned black and white theme!
                </p>

                <div className="space-y-2 text-lg">
                  <p>
                    <strong>Playing time:</strong> 20 - 25 minutes
                  </p>
                  <p>
                    <strong>3 to 8 players</strong>
                  </p>
                  <p>
                    <strong>Ages 10 and up</strong>
                  </p>
                </div>

                <Button size="lg" className="mt-8">
                  Order Today
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md h-96 bg-muted rounded-lg shadow-2xl overflow-hidden">
                <img src="/1950s-black-car-side.png" alt="Vintage 1950s Car" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Summary Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-foreground mb-8 font-serif">Game Summary</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gold Coins */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden">
                    <img src="/golden-mob-coins.png" alt="Gold Coins" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-lg text-foreground">Each Mobster (player) starts with 4 gold coins...</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Playing Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/1950s-mobster.png"
                      alt="Playing Cards and Dice"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg text-foreground">
                    ...and a playing card that's a combination of a Tic Tac Toe grid and Bingo card (kind of!).
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tic Tac Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 p-4 bg-card rounded-lg shadow-lg">
                      {[9, 4, 2, 7, 8, 6, 1, 3, 5].map((num, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 bg-primary text-primary-foreground rounded flex items-center justify-center font-bold text-lg"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-foreground">
                    The 3 dice are rolled. If a number is rolled, cover that number on your playing card with a black
                    and white game token.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-12 space-y-8 text-lg text-foreground max-w-4xl mx-auto">
            <p>
              If a 'command' is rolled such as "Give Left" or "Take Any", then the Roller must surrender ('Give') a gold
              coin to the Mobster on their left; or steal ('Take') a gold coin from ANY Mobster of their choosing.
            </p>
            <p>
              And if a 'Whack' or a 'Whack Whack' are rolled, then the Mobsters must pay the Mob Boss one gold coin.
            </p>
            <p>The first Mobster to get a Tic Tac Toe steals a gold coin from any Mobster of their choosing.</p>
            <p>
              The last Mobster standing with any gold coins, becomes the new Mob Boss and wins ALL the gold coins in the
              game.
            </p>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                For a printed PDF of the detailed game instructions, click here.
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 font-serif">"Do Da Whack!" Challenge</h2>

            <div className="text-6xl font-bold text-primary mb-8">WIN $500.00</div>

            <p className="text-xl text-foreground mb-8">It's so simple!</p>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="text-left space-y-4 text-lg">
                <p>1. Watch this "Do Da Whack!" video.</p>
                <p>2. Put on those acting skills that you know you got!</p>
                <p>
                  3. Spoof this video (spoof means copy the words, copy the accent, copy the facial moves, copy
                  everything for gosh sakes, and make your own video with you as the STAR!).
                </p>
                <p>4. Post it on Instagram, Facebook, Tic Toc, YouTube or LinkedIn.</p>
                <p>
                  5. Submit your posted link below and immediately be eligible to win $500.00. Click here to submit
                  video.
                </p>

                <div className="bg-card p-6 rounded-lg mt-8">
                  <p className="font-bold mb-2">DO NOT QUIT YOUR DAY JOB!!</p>
                  <p className="text-sm">
                    The winner will be randomly selected from all entries and have absolutely NOTHING to do with your
                    ability as an actor, producer or director.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg">
                  <p className="font-bold mb-2">
                    Extra brownie points for cool mobster hats, awesome accents, big fat gold chains, and bigger and
                    fatter cigars.
                  </p>
                </div>

                <p className="text-center font-bold mt-8">
                  All entries must be submitted by October 31, 2025 - else you get "WHACKED"!
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="w-64 h-80 bg-muted rounded-lg shadow-2xl overflow-hidden">
                  <img
                    src="/1950s-mobster.png"
                    alt="Mobster Challenge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-foreground mb-4 font-serif">Contact Us</h2>
            <p className="text-center text-xl text-muted-foreground mb-12">We would love to hear from you!!</p>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name (required)</label>
                      <Input placeholder="First Name" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <Input placeholder="Last Name" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email (required)</label>
                    <Input type="email" placeholder="Email" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message (required)</label>
                    <Textarea placeholder="Your message..." className="w-full min-h-32" />
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="px-12">
                      Send
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Tic Tac Whack! All rights reserved.
            
          </p>
        </div>
      </footer>
    </div>
  )
}
