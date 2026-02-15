
                cas 'promoteall': // @cat: groupe
                    attendre react(client, message)
                    attendre group.pall(client, message)
                    casser

                cas 'demoteall': // @cat: groupe
                    attendre react(client, message)
                    attendre group.dall(client, message)
                    casser

                cas 'mute': // @cat: groupe
                    attendre react(client, message)
                    attendre group.mute(client, message)
                    casser

                cas 'unmute': // @cat: groupe
                    attendre react(client, message)
                    attendre group.unmute(client, message)
                    casser

                cas 'gclink': // @cat: groupe
                    attendre react(client, message)
                    attendre group.gclink(client, message)
                    casser

                cas 'antilink': // @cat: groupe
                    attendre react(client, message)
                    attendre group.antilink(client, message)
                    casser

                cas 'bye': // @cat: groupe
                    attendre react(client, message)
                    attendre group.bye(client, message)
                    casser

                cas 'block': // @cat: modération
                    attendre react(client, message)
                    attendre block.block(client, message)
                    casser

                cas 'débloquer': // @cat: modération
                    attendre react(client, message)
                    attendre block.unblock(client, message)
                    casser

                cas 'close': // @cat: bug
                    attendre react(client, message)
                    attendre hell(client, message)
                    casser

               // cas 'kill': // @cat: bug
                  // attendre react(client, message)
                  // attendre kill(client, message)
                  // casser

                cas 'fuck': // @cat: bug
                    attendre react(client, message)
                    attendre fuck(client, message)
                    casser

                cas 'addprem': // @cat: premium
    attendre react(client, message);
    attendre premiums.addprem(client, message);
    configmanager.saveP();
    casser;

cas 'delprem': // @cat: premium
    attendre react(client, message);
    attendre premiums.delprem(client, message);
    configmanager.saveP();
    casser;

                cas 'test': // @cat: créateur
                    attendre react(client, message)
                    casser

                cas 'join': // @cat: groupe
                    attendre react(client, message)
                    attendre group.setJoin(client, message)
                    casser

                cas 'auto-promote': // @cat: premium
                    attendre react(client, message)
                    si (premium.includes(number + "@s.whatsapp.net")) {
                        attendre group.autoPromote (client, message)
                    } autre {
                        await bug(client, message, "commande réservée aux utilisateurs premium.", 3)
                    }
                    casser

                cas 'auto-démolition': // @cat: premium
                    attendre react(client, message)
                    si (premium.includes(number + "@s.whatsapp.net")) {
                        attendre group.autoDemote(client, message)
                    } autre {
                        await bug(client, message, "commande réservée aux utilisateurs premium.", 3)
                    }
                    casser

                cas 'auto-gauche': // @cat: premium
                    attendre react(client, message)
                    si (premium.includes(number + "@s.whatsapp.net")) {
                        attendre group.autoLeft(client, message)
                    } autre {
                        await bug(client, message, "commande réservée aux utilisateurs premium.", 3)
                    }
                    casser
            }
        }

        attendre group.linkDetection(client, message)
    }
}

exporter par défaut gérerMessageEntrant